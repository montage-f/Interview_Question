/**
 * Created by MonTage_fz on 2019/7/31
 */

// 使用Promise
    
    // 第一个 <T> 表示函数传入的变量
    // 第二个 T 表示Promise的返回类型
    // 第三个 <T> 表示 promise对象返回的类型,
    // 我们可以把 <T> 当成是一个函数的传参, 然后用来统一一样的类型
const sleep_1 = <T>(waite: number, info: T): Promise<T> => new Promise<T>((resolve) => {
        setTimeout(() => {
            resolve(info);
        }, waite);
    });

sleep_1<number>(1000, 1).then((info) => {
    console.log(`请开始密的表演--${info}`);
});

// 使用async/ await

// 这里使用了 async 而async 始终返回的是一个Promise对象, void表示,这个Promise对象没有返回值
const asyncFun = async (): Promise<void> => {
    console.log('我是立即执行~');
    await sleep_1(1000, 22);
    console.log('我是一秒钟之后执行~');
};
asyncFun();

// 使用回调函数

const callbackAsync = (waite: number, cb: Function) => {
    setTimeout(() => {
        cb();
    }, waite);
};
callbackAsync(1000, function () {
    console.log('我是一个回调函数');
});


// 同步处理方式
let sleep_3 = (waite: number): void => {
    let nowDate: number = +new Date();
    while (+new Date() - nowDate <= waite) {
    }
};
sleep_3(1000);
console.log('我是同步处理等待');
