/**
 * Created by MonTage_fz on 2019/7/30
 */
var o = {
    text: 'hello world'
};
var input_1 = document.querySelector('.input_1');
var textarea_1 = document.querySelector('.textarea_1');
var ProxyHandle = {
    get: function (target, key) {
        // 判断目标对象是否拥有该属性
        if (Reflect.has(target, key)) {
            console.log(key + "\u88AB\u8BFB\u53D6");
            return target[key];
        }
        else {
            throw new Error("\u6CA1\u6709" + key + "\u5C5E\u6027");
        }
    },
    set: function (target, key, value) {
        // 设置目标对象的属性和属性值, 返回boolean值
        textarea_1.value = target[key];
        return Reflect.set(target, key, value);
    }
};
var proxy = new Proxy(o, ProxyHandle);
proxy.text = '小月';
// 简易实现双向数据绑定
input_1.addEventListener('input', function () {
    proxy.text = input_1.value;
});
var Vue = /** @class */ (function () {
    function Vue(options) {
        this.$binding = {};
        this.$options = options;
        this.$el = document.querySelector(this.$options.el);
        this.$data = this.$options.data;
        this.$methods = this.$options.methods;
        this.observer(this.$data);
        this.compile(this.$el);
    }
    // 观察数据
    Vue.prototype.observer = function (data) {
        var _this = this;
        var handler = {
            get: function (target, p) {
                if (Reflect.has(target, p)) {
                    return Reflect.get(target, p);
                }
                else {
                    throw Error("\u6B64\u5BF9\u8C61\u65E0" + p + "\u5C5E\u6027");
                }
            },
            set: function (target, p, value) {
                var isTrue = Reflect.set(target, p, value);
                _this.$binding[p].forEach(function (item) {
                    item.updates();
                });
                return isTrue;
            }
        };
        this.$data = new Proxy(data, handler);
    };
    // 编译
    Vue.prototype.compile = function (el) {
        var _this = this;
        var stack = [];
        if (!el)
            return;
        stack.push(el);
        var _loop_1 = function () {
            var node = stack.shift();
            // 判断是否有click事件
            var hasClick = node.hasAttribute('@click');
            if (hasClick) {
                var method = node.getAttribute('@click');
                // 有的话, 将这个click事件, 添加到node节点上
                node.addEventListener('click', this_1.$methods[method].bind(this_1.$data));
            }
            // 判断是否有绑定属性 v-model
            var hasModel = node.getAttribute('v-model') && node.tagName === 'INPUT';
            if (hasModel) {
                var value_1 = node.getAttribute('v-model');
                if (!this_1.$binding[value_1])
                    this_1.$binding[value_1] = [];
                this_1.$binding[value_1].push(new Watcher(node, this_1.$data, value_1, 'value'));
                // 让data里面的属性值, 与node节点的值相等
                node.addEventListener('input', function () {
                    _this.$data[value_1] = node.value;
                });
            }
            var hasBind = node.getAttribute('v-bind');
            if (hasBind) {
                var value = node.getAttribute('V-bind');
                if (!this_1.$binding[value])
                    this_1.$binding[value] = [];
                this_1.$binding[value].push(new Watcher(node, this_1.$data, value, 'innerHTML'));
            }
            var children = node.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var i_1 = children_1[_i];
                stack.push(i_1);
            }
        };
        var this_1 = this;
        while (stack.length) {
            _loop_1();
        }
    };
    return Vue;
}());
var Watcher = /** @class */ (function () {
    function Watcher(el, data, key, attr) {
        this.el = el;
        this.data = data;
        this.key = key;
        this.attr = attr;
        this.updates();
    }
    Watcher.prototype.updates = function () {
        this.el[this.attr] = this.data[this.key];
    };
    return Watcher;
}());
var vm = new Vue({
    el: '#app',
    data: {
        num: 0
    },
    methods: {
        add: function () {
            this.num++;
        }
    }
});
