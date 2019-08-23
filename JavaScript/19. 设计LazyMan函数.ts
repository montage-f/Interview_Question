/**
 * Created by MonTage_fz on 2019/8/1
 */

// 要求
// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
interface ILazyMan {
    name: string
    stack: Array<Function>
    
    eat(food: string): any
    
    sleep(wait: number): any
    
    sleepFirst(wait: number): any
    
    next()
}

// 这里面需要注意的是, 等待是异步操作, 我们先用同步将所有的事件都放到栈里面, 然后, 在通过next进行顺序执行,
// 类似于 koa 里面的 next机制
class LazyMan implements ILazyMan {
    name: string;
    stack: Array<Function>;
    
    constructor(name: string) {
        this.name = name;
        this.stack = [];
        console.log(`我是${this.name}`);
        // 这个 setTimeout 用来先让他们将同步完成, 完成之后, 在进行异步执行
        setTimeout(() => {
            this.next();
        });
    }
    
    sleep(wait: number) {
        this.stack.push(() => {
            setTimeout(() => {
                console.log(`我休息了${wait}s`);
                this.next();
            }, wait * 1000);
        });
        return this;
    }
    
    eat(food: string): any {
        this.stack.push(() => {
            console.log(`我正在吃${food}`);
            this.next();
        });
        return this;
    }
    
    sleepFirst(wait: number): object {
        this.stack.unshift(() => {
            setTimeout(() => {
                console.log(`我先休息了${wait}s`);
                this.next();
            }, wait * 1000);
        });
        return this;
    }
    
    
    next() {
        const fn = this.stack.shift();
        fn && fn();
    }
}

let lazyNan = (name: string): ILazyMan => new LazyMan(name);

lazyNan('小芳').eat('firstFood').eat('lunch').sleepFirst(5).sleep(5).eat('dinner');
