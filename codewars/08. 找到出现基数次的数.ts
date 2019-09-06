/**
 * Created by MonTage_fz on 2019/9/6
 */
// 找到出现基数次的数字
    // [1,1,1,1,1,1,10,1,1,1,1] => 10
    // [1,1,3] => 3
    // [1,1,3,3,2] => 2
    // [1,1,3,3,2,2,2] => 2
    
    // 我的答案
const findOddTime = (arr: number[]): number => {
        const list = Array.from(new Set(arr));
        const map = {};
        for (let i of list) {
            map[i] = 0;
        }
        for (let i of arr) {
            map[i] += 1;
        }
        for (let key in map) {
            if (map.hasOwnProperty(key)) {
                if (map[key] % 2 !== 0) {
                    return +key;
                }
            }
        }
    };
console.log(findOddTime([1, 1, 3, 3, 2, 2, 0, 0, 0]));
console.log('-------------------');

// 别人的答案
const findOddTime1 = (arr: number[]): number => {
    let map = {};
    arr.forEach((item) => {
        map[item] ? map[item]++ : map[item] = 1;
    });
    for (let key in map) {
        if (map[key] % 2 !== 0) {
            return +key;
        }
    }
};
console.log(findOddTime1([1, 1, 3, 3, 2, 2, 0, 0, 0]));
