/**
 * Created by MonTage_fz on 2019/8/2
 */
// 给定一个数组, 将数组向右移动k位置, 其中k是非负数
// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
//
// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释:
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]
var rightMove = function (arr, step) {
    while (step > 0) {
        arr.unshift(arr.pop());
        step--;
    }
    return arr;
};
console.log(rightMove([1, 2], 13));
console.log(rightMove([-1, -100, 3, 99], 2));
