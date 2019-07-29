var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    // 添加订阅者
    Subject.prototype.add = function (item) {
        this.observers.push(item);
    };
    // 通知订阅者
    Subject.prototype.notify = function () {
        this.observers.forEach(function (item) {
            if (typeof item === 'function') {
                item();
            }
        });
    };
    return Subject;
}());
var subject = new Subject();
var man_1 = function () { return console.log('我是订阅者man_1'); };
var man_2 = function () { return console.log('我是订阅者man_2'); };
subject.add(man_1);
subject.add(man_2);
subject.notify();
var Movie = /** @class */ (function () {
    function Movie() {
        // 保存订阅的信息
        this.subject = {};
    }
    // 订阅的类型和信息
    Movie.prototype.look = function (type, info) {
        if (!this.subject[type]) {
            this.subject[type] = [];
        }
        this.subject[type].push(info);
    };
    // 发布什么类型
    Movie.prototype.notify = function (type) {
        this.subject[type].forEach(function (item, index) {
            if (typeof item === 'function') {
                item(type, index + 1);
            }
        });
    };
    return Movie;
}());
var movie = new Movie();
movie.look('哪吒', function (type, index) { return console.log("\u6211\u662F\u7B2C" + index + "\u4E2A\u770B" + type + "\u7684\u4EBA"); });
movie.look('哪吒', function (type, index) { return console.log("\u6211\u662F\u7B2C" + index + "\u4E2A\u770B" + type + "\u7684\u4EBA"); });
movie.look('哪吒', function (type, index) { return console.log("\u6211\u662F\u7B2C" + index + "\u4E2A\u770B" + type + "\u7684\u4EBA"); });
movie.look('西游记', function (type, index) { return console.log("\u6211\u662F\u7B2C" + index + "\u4E2A\u770B" + type + "\u7684\u4EBA"); });
movie.notify('哪吒');
movie.notify('西游记');
