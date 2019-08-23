/**
 * Created by MonTage_fz on 2019/7/24
 */
// 节流, 当持续触发事件时, 保证一段时间内, 只调用一次事件处理函数
// 节流常用的有两种实现方法, 一种是定时器方法, 一种是时间戳方法
// 定时器方法
var throttle_setTime = function (fn, wait) {
    if (wait === void 0) { wait = 1000; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var lock = false;
    return function (e) {
        if (lock)
            return;
        lock = true;
        setTimeout(function () {
            fn([e].concat(rest));
            lock = false;
        }, wait);
    };
};
var test = function () {
    console.log('节流');
};
var setTime = document.querySelector('.throttle_setTime');
setTime.addEventListener('input', throttle_setTime(test));
// 时间戳方法, 该方法,第一次总是会立即执行, 因为startTime 是在函数调用的时候, 就已经存在值了
var throttle_date = function (fn, wait) {
    if (wait === void 0) { wait = 1000; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var startTime = Date.now();
    return function (e) {
        var curTime = Date.now();
        if (curTime - startTime >= wait) {
            fn([e].concat(rest));
            startTime = Date.now();
        }
    };
};
var date = document.querySelector('.throttle_date');
date.addEventListener('input', throttle_date(test));
