/**
 * Created by MonTage_fz on 2019/7/30
 */


// 介绍 proxy
interface IO {
    text: string
    
}

const o = {
    text: '小樊'
};
let input_1: HTMLInputElement = document.querySelector('.input_1');
let textarea_1: HTMLInputElement = document.querySelector('.textarea_1');

const ProxyHandle: ProxyHandler<IO> = {
    get(target: IO, key: string): any {
        // 判断目标对象是否拥有该属性
        if (Reflect.has(target, key)) {
            console.log(`${key}被读取`);
            return target[key];
        } else {
            throw new Error(`没有${key}属性`);
        }
        
    },
    set(target: IO, key: string, value: any): boolean {
        // 设置目标对象的属性和属性值, 返回boolean值
        textarea_1.value = target[key];
        return Reflect.set(target, key, value);
    }
};
const proxy = new Proxy(o, ProxyHandle);
proxy.text = '小月';

// 简易实现双向数据绑定
input_1.addEventListener('input', () => {
    proxy.text = input_1.value;
});


// 实现vue的双向数据绑定
interface IVue {
    $options: object
    $el: Element
    $data: object
    $methods: object
    $binding: object
    
    observer(data: object): void
    
    compile(el: Element): void
}

interface IOptions {
    el: string
    data: object
    methods: object
}

class Vue implements IVue {
    $options;
    $el;
    $data;
    $methods;
    $binding = {};
    
    constructor(options: IOptions) {
        this.$options = options;
        this.$el = document.querySelector(this.$options.el);
        this.$data = this.$options.data;
        this.$methods = this.$options.methods;
        this.observer(this.$data);
        this.compile(this.$el);
    }
    
    // 观察数据
    observer(data) {
        const handler: ProxyHandler<object> = {
            get(target: object, p: string | number): any {
                if (Reflect.has(target, p)) {
                    return Reflect.get(target, p);
                } else {
                    throw Error(`此对象无${p}属性`);
                }
            },
            set: (target: object, p: string | number, value: any): boolean => {
                let isTrue = Reflect.set(target, p, value);
                this.$binding[p].forEach(item => {
                    item.updates();
                });
                return isTrue;
            }
        };
        this.$data = new Proxy(data, handler);
    }
    
    // 编译
    compile(el) {
        const stack = [];
        if (!el) return;
        stack.push(el);
        while (stack.length) {
            let node = stack.shift();
            // 判断是否有click事件
            const hasClick = node.hasAttribute('@click');
            if (hasClick) {
                let method = node.getAttribute('@click');
                // 有的话, 将这个click事件, 添加到node节点上
                node.addEventListener('click', this.$methods[method].bind(this.$data));
            }
            // 判断是否有绑定属性 v-model
            const hasModel = node.getAttribute('v-model') && node.tagName === 'INPUT';
            if (hasModel) {
                const value = node.getAttribute('v-model');
                if (!this.$binding[value]) this.$binding[value] = [];
                this.$binding[value].push(
                    new Watcher(node, this.$data, value, 'value')
                );
                // 让data里面的属性值, 与node节点的值相等
                node.addEventListener('input', () => {
                    this.$data[value] = node.value;
                });
            }
            const hasBind = node.getAttribute('v-bind');
            if (hasBind) {
                const value = node.getAttribute('V-bind');
                if (!this.$binding[value]) this.$binding[value] = [];
                this.$binding[value].push(
                    new Watcher(node, this.$data, value, 'innerHTML')
                );
            }
            
            const children = node.children;
            for (let i of children) {
                stack.push(i);
            }
        }
        
    }
}

interface IWatcher {
    el: Element
    data: object
    key: string
    attr: string
    
    updates(): void
}

class Watcher implements IWatcher {
    el;
    data;
    key;
    attr;
    
    constructor(el, data, key, attr) {
        this.el = el;
        this.data = data;
        this.key = key;
        this.attr = attr;
        this.updates();
    }
    
    updates() {
        this.el[this.attr] = this.data[this.key];
    }
}

let vm = new Vue({
    el: '#app',
    data: {
        num: 0
    },
    methods: {
        add() {
            this.num++;
        }
    }
});
