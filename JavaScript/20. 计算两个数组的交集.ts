/**
 * Created by MonTage_fz on 2019/8/1
 */
let q = [1, 2, 2, 3, 2, 1];
let w = [2, 3, 2];

const intersect = (arr1, arr2): Array<number> => {
    let map = {};
    let result = [];
    for (let i of arr1) {
        if (map[i]) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    
    for (let i of arr2) {
        if (map[i] > 0) {
            result.push(i);
            map[i]--;
        }
    }
    return result;
};
console.log(intersect(q, w));

// 随机生成一个长度为 10 的整数类型的数组，
// 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，
// 例如 [[2, 3, 4, 5], [10, 11], [20]]

// 随机生成一个长度为10的数组
const randomFun = (length: number, min: number, max: number): Array<number> =>
    Array.from({length}, () => Math.round(min + Math.random() * (max - min)))
    .sort((a, b) => a - b);

const formArr = (arr) => {
    let obj = {};
    let newArr = [];
    Array.from(new Set(arr)).forEach((item: any) => {
        const intNum = Math.floor(item / 10);
        if (!obj[intNum]) {
            obj[intNum] = [];
        }
        obj[intNum].push(item);
    });
    for (let i in obj) {
        newArr.push(obj[i]);
    }
    return newArr;
};
console.log(formArr(randomFun(10, 10, 100)));

