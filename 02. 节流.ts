/**
 * Created by MonTage_fz on 2019/7/24
 */
// 节流, 当持续触发事件时, 保证一段时间内, 只调用一次事件处理函数
// 节流常用的有两种实现方法, 一种是定时器方法, 一种是时间戳方法

interface IThrottle {
    (fn, wait?: number): any
}

const throttle: IThrottle = (fn, wait = 1000) => {
    let lock: boolean = false;
    return () => {
        if (lock) return;
        lock = true;
        setTimeout(() => {
            fn();
            lock = false;
        }, wait);
    };
};
const test = (): void => {
    console.log('节流');
};

let dom: Element = document.querySelector('.dom');
dom.addEventListener('input', throttle(test));
