/**
 * Created by MonTage_fz on 2019/7/31
 */
// 随机生成n个从a,b之间的数组
const randomArr = (n: number, a: number, b: number): Array<number> => {
    let arr = [];
    for (let i: number = 0; i < n; i++) {
        arr.push(Math.round(a + Math.random() * (b - a)));
    }
    return arr;
};

// 冒泡排序
// 升序冒泡, 两次徐环, 相邻元素两两比较, 如果前面的大于后面的就交换位置
// 降序冒泡, 两次循环, 响铃元素两两比较, 如果前面的小于后面的就交换位置

const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > arr[k + 1]) {
                [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
            }
        }
    }
    return arr;
};
console.log(sort(randomArr(10, 0, 1000)));
