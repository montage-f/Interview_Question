/**
 * Created by MonTage_fz on 2019/9/11
 */
// 编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。（实例可能监听多个不同的事件，也可以去除监听事件）
var People = /** @class */ (function () {
    function People(name) {
        this.list = [];
        this.name = name;
    }
    People.prototype.on = function (funName, fun) {
        this.list.push({
            name: funName,
            fun: fun
        });
    };
    People.prototype.emit = function (funName, content) {
        this.list.forEach(function (_a) {
            var name = _a.name, fun = _a.fun;
            if (funName === name) {
                fun(content);
            }
        });
    };
    People.prototype.off = function (funName, fu) {
        var _this = this;
        this.list.forEach(function (_a, index) {
            var name = _a.name, fun = _a.fun;
            if (funName === name && fu.name === fun.name) {
                _this.list.splice(index, 1);
            }
        });
    };
    People.prototype.sayHi = function () {
        console.log("Hi, I am " + this.name);
    };
    return People;
}());
/* 以下为测试代码 */
var say1 = function (greeting) {
    console.log(greeting + ", nice meeting you.");
};
var say2 = function (greeting) {
    console.log(greeting + ", nice meeting you, too.");
};
var jerry = new People('Jerry');
jerry.sayHi();
// => 输出：'Hi, I am Jerry'
jerry.on('greeting', say1);
jerry.on('greeting', say2);
jerry.emit('greeting', 'Hi');
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'
jerry.off('greeting', say1);
jerry.emit('greeting', 'Hi');
// => 只输出：'Hi, nice meeting you, too'
