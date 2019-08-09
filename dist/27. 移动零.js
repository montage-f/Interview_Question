/**
 * Created by MonTage_fz on 2019/8/9
 */
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 要求:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数
var c = [0, 1, 0, 3, 12];
var moveZero_1 = function (obj) {
    // 双指针法则
    //     设定一个慢指针和一个快指针, 指针每次 +1, 当慢指针的值不等于0 的时候, 指针继续往后移动,
    //     当慢指针等于0, 并且快指针不等于0 的时候, 交换快慢指针的值, 慢指针再 +1
    var _a;
    var fast = 0;
    var slow = 0;
    while (fast < obj.length) {
        if (obj[slow]) {
            slow++;
        }
        if (obj[fast]) {
            _a = [obj[fast], obj[slow]], obj[slow] = _a[0], obj[fast] = _a[1];
        }
        fast++;
    }
    return obj;
};
// console.log(moveZero_1(c));
var moveZero_2 = function (obj) {
    var n = 0;
    // 先过滤出不为0的数, 并记录0的个数
    return obj.filter(function (v) {
        if (v === 0) {
            n++;
        }
        return v !== 0;
    })
        // 将0 合并进来
        .concat(Array.from({ length: n }, function (n) { return 0; }));
};
// console.log(moveZero_2(c));
// 将零移到前头
var moveZero_3 = function (obj) {
    var n = 0;
    var arr = obj.filter(function (item) {
        if (item === 0)
            n++;
        return item !== 0;
    });
    arr.unshift.apply(arr, Array.from({ length: n }, function () { return 0; }));
    return arr;
};
// console.log(moveZero_3(c));
// 指针法 [0, 1, 0, 3, 12]
var moveZero_4 = function (obj) {
    var _a;
    var fast = obj.length - 1;
    var slow = obj.length - 1;
    while (fast >= 0) {
        fast--;
        if (obj[slow]) {
            slow--;
        }
        if (obj[fast]) {
            _a = [obj[fast], obj[slow]], obj[slow] = _a[0], obj[fast] = _a[1];
        }
    }
    return obj;
};
console.log(moveZero_4(c));
