/**
 * Created by MonTage_fz on 2019/7/24
 */
// 节流, 当持续触发事件时, 保证一段时间内, 只调用一次事件处理函数
// 节流常用的有两种实现方法, 一种是定时器方法, 一种是时间戳方法
var throttle = function (fn, wait) {
    if (wait === void 0) { wait = 1000; }
    var lock = false;
    return function () {
        if (lock)
            return;
        lock = true;
        setTimeout(function () {
            fn();
            lock = false;
        }, wait);
    };
};
var test = function () {
    console.log('节流');
};
var dom = document.querySelector('.dom');
dom.addEventListener('input', throttle(test));
