/**
 * Created by MonTage_fz on 2019/8/9
 */

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 要求:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数

let c: Array<number> = [0, 1, 0, 3, 12];
const moveZero_1 = (obj: Array<number>): Array<number> => {
// 双指针法则
//     设定一个慢指针和一个快指针, 指针每次 +1, 当慢指针的值不等于0 的时候, 指针继续往后移动,
//     当慢指针等于0, 并且快指针不等于0 的时候, 交换快慢指针的值, 慢指针再 +1
    
    let fast = 0;
    let slow = 0;
    
    while (fast < obj.length) {
        if (obj[slow]) {
            slow++;
        }
        if (obj[fast]) {
            [obj[slow], obj[fast]] = [obj[fast], obj[slow]];
        }
        fast++;
    }
    return obj;
};
// console.log(moveZero_1(c));

const moveZero_2 = (obj: Array<number>): Array<number> => {
    let n = 0;
    // 先过滤出不为0的数, 并记录0的个数
    return obj.filter(v => {
        if (v === 0) {
            n++;
        }
        return v !== 0;
    })
    // 将0 合并进来
    .concat(Array.from({length: n}, (n) => 0));
    
};
// console.log(moveZero_2(c));

// 将零移到前头
const moveZero_3 = (obj: Array<number>): Array<number> => {
    let n = 0;
    let arr = obj.filter((item) => {
        if (item === 0) n++;
        return item !== 0;
    });
    arr.unshift(...Array.from({length: n}, () => 0));
    return arr;
};
// console.log(moveZero_3(c));

// 指针法 [0, 1, 0, 3, 12]
const moveZero_4 = (obj: Array<number>): Array<number> => {
    let fast = obj.length - 1;
    let slow = obj.length - 1;
    while (fast >= 0) {
        fast--;
        if (obj[slow]) {
            slow--;
        }
        if (obj[fast]) {
            [obj[slow], obj[fast]] = [obj[fast], obj[slow]];
        }
    }
    
    return obj;
};
console.log(moveZero_4(c));
