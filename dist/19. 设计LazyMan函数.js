/**
 * Created by MonTage_fz on 2019/8/1
 */
// 这里面需要注意的是, 等待是异步操作, 我们先用同步将所有的事件都放到栈里面, 然后, 在通过next进行顺序执行,
// 类似于 koa 里面的 next机制
var LazyMan = /** @class */ (function () {
    function LazyMan(name) {
        var _this = this;
        this.name = name;
        this.stack = [];
        console.log("\u6211\u662F" + this.name);
        // 这个 setTimeout 用来先让他们将同步完成, 完成之后, 在进行异步执行
        setTimeout(function () {
            _this.next();
        });
    }
    LazyMan.prototype.sleep = function (wait) {
        var _this = this;
        this.stack.push(function () {
            setTimeout(function () {
                console.log("\u6211\u4F11\u606F\u4E86" + wait + "s");
                _this.next();
            }, wait * 1000);
        });
        return this;
    };
    LazyMan.prototype.eat = function (food) {
        var _this = this;
        this.stack.push(function () {
            console.log("\u6211\u6B63\u5728\u5403" + food);
            _this.next();
        });
        return this;
    };
    LazyMan.prototype.sleepFirst = function (wait) {
        var _this = this;
        this.stack.unshift(function () {
            setTimeout(function () {
                console.log("\u6211\u5148\u4F11\u606F\u4E86" + wait + "s");
                _this.next();
            }, wait * 1000);
        });
        return this;
    };
    LazyMan.prototype.next = function () {
        var fn = this.stack.shift();
        fn && fn();
    };
    return LazyMan;
}());
var lazyNan = function (name) { return new LazyMan(name); };
lazyNan('小芳').eat('firstFood').eat('lunch').sleepFirst(5).sleep(5).eat('dinner');
