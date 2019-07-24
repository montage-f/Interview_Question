/**
 * Created by MonTage_fz on 2019/7/24
 */
// 防抖, 当持续触发事件时, 一定时间段内没有再触发时间, 事件处理函数才会执行一次,
// 如果设定的时间到来之前, 又一次触发了时间, 就重新开始延时.
interface IDebounce {
    (fn, wait?: number): any
}

const debounce: IDebounce = (fn, wait = 1000) => {
    let timeout: number;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, wait);
    };
};
let put: Element = document.querySelector('.put');
let text = (): void => {
    console.log('防抖');
};
put.addEventListener('input', debounce(text));
