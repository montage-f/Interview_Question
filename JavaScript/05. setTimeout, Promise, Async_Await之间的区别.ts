/**
 * Created by MonTage_fz on 2019/7/26
 */
// 时间循环中有 宏任务列队 和 微任务列队
//  经过下面的测试, 我们可以得出一个结论, 在代码执行的时候, 它依然是先去执行所有的同步函数,
//  将异步函数存入到列队之中, 然后, 等待同步执行完成之后, 在对异步进行执行
// async_await 与 Promise里面的then 哪个函数在前, 哪个函数先执行

console.log('start-1');   // 1

setTimeout(() => {
    console.log('setTimeout');  // 9
});


new Promise((resolve, reject) => {
    console.log('Promise-1');  // 2
    resolve();
    console.log('Promise-2');   // 3
}).then(() => {
    console.log('Promise-then');  // 7
});

async function fun_2() {
    console.log('fun_2');   // 5
}

async function fun_1() {
    console.log('fun_1_start');  // 4
    await fun_2();
    console.log('fun_1_end');    // 8
}

fun_1();

console.log('start-2');  // 6



