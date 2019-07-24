var debounce = function (fn, wait) {
    if (wait === void 0) { wait = 1000; }
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn();
        }, wait);
    };
};
var put = document.querySelector('.put');
var text = function () {
    console.log('防抖');
};
put.addEventListener('input', debounce(text));
