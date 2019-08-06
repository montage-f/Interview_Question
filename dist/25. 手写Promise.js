/**
 * Created by MonTage_fz on 2019/8/6
 */
// https://juejin.im/post/5b2f02cd5188252b937548ab
// 在js中, 当js执行时, 会被引擎分为两类任务, 1. 同步任务; 2. 异步任务
// 对于同步任务来讲, 会被推到执行栈按顺序去执行这些任务
// 对于异步任务来说, 当其可以被执行时, 会被放到一个任务列队里  等待js引擎   去执行
// 执行栈中的所有同步任务完成后, js引擎才会去任务列队里面查看是否有任务存在,
// 并将任务放到执行栈中去执行, 执行完了又会去任务队列里查看是否有已经可以执行的任务,
// 这种循环检查的机制, 就叫做时间循环
// 对于任务列队, 被分为两类 1. 微任务; 2. 宏任务.
// 宏任务: setTimeout, setInterval
// 微任务: Promise 的 then
// Event Loop 的执行顺序
// 1. 首先执行 执行栈里面的任务
// 2. 执行栈清空后, 检查微任务列队, 将可执行的微任务全部执行
// 3. 取宏任务列队中的第一项执行
// 4. 回到第二步
// 注意: 微任务列队每次全执行, 宏任务列队每次都只取一项执行
// 总结: 1. 先执行同步任务的程序; 2. 再执行异步任务里面的微任务; 3. 所有微任务都执行完了之后, 就执行异步的宏任务;
var MyPromise = /** @class */ (function () {
    function MyPromise(exec) {
        var _this = this;
        // 存储成功的回调
        this.onResolvedCallback = [];
        // 存储失败的回调
        this.onRejectedCallback = [];
        // 用来表示状态是成功还是失败
        this.status = 'pending';
        // 成功时候执行
        var resolve = function (value) {
            if (_this.status === 'pending') {
                _this.value = value;
                _this.status = 'resolved';
                _this.onResolvedCallback.forEach(function (fn) { return fn(); });
            }
        };
        // 失败的时候执行
        var reject = function (value) {
            if (_this.status === 'pending') {
                _this.reason = value;
                _this.status = 'rejected';
                _this.onRejectedCallback.forEach(function (fn) { return fn(); });
            }
        };
        try {
            exec(resolve, reject);
        }
        catch (e) {
            reject(e);
        }
    }
    MyPromise.prototype.then = function (onFullFilled, onRejected) {
        var _this = this;
        if (this.status === 'resolved') {
            onFullFilled(this.value);
        }
        if (this.status === 'rejected') {
            onRejected(this.reason);
        }
        if (this.status === 'pending') {
            this.onResolvedCallback.push(function () {
                onFullFilled(_this.value);
            });
            this.onRejectedCallback.push(function () {
                onRejected(_this.reason);
            });
        }
    };
    return MyPromise;
}());
var person = new MyPromise(function (resolve) {
});
person.then(function (item) {
    console.log(item);
});
