/**
 * Created by MonTage_fz on 2019/7/24
 */
// 节流, 当持续触发事件时, 保证一段时间内, 只调用一次事件处理函数
// 节流常用的有两种实现方法, 一种是定时器方法, 一种是时间戳方法

interface IThrottle {
    (fn, wait?: number): any
}

// 定时器方法
const throttle_setTime: IThrottle = (fn, wait = 1000, ...rest) => {
    let lock: boolean = false;
    return (e) => {
        if (lock) return;
        lock = true;
        setTimeout(() => {
            fn([e, ...rest]);
            lock = false;
        }, wait);
    };
};
const test = (): void => {
    console.log('节流');
};

let setTime: Element = document.querySelector('.throttle_setTime');
setTime.addEventListener('input', throttle_setTime(test));

// 时间戳方法, 该方法,第一次总是会立即执行, 因为startTime 是在函数调用的时候, 就已经存在值了
const throttle_date: IThrottle = (fn, wait = 1000, ...rest) => {
    let startTime: number = Date.now();
    return (e) => {
        let curTime: number = Date.now();
        if (curTime - startTime >= wait) {
            fn([e, ...rest]);
            startTime = Date.now();
        }
    };
};

let date: Element = document.querySelector('.throttle_date');
date.addEventListener('input', throttle_date(test));
