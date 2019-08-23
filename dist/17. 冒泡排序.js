/**
 * Created by MonTage_fz on 2019/7/31
 */
// 随机生成n个从a,b之间的数组
var randomArr = function (n, a, b) {
    var arr = [];
    for (var i_1 = 0; i_1 < n; i_1++) {
        arr.push(Math.round(a + Math.random() * (b - a)));
    }
    return arr;
};
// 冒泡排序
// 升序冒泡, 两次徐环, 相邻元素两两比较, 如果前面的大于后面的就交换位置
// 降序冒泡, 两次循环, 响铃元素两两比较, 如果前面的小于后面的就交换位置
var sort = function (arr) {
    var _a;
    for (var i_2 = 0; i_2 < arr.length; i_2++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] > arr[k + 1]) {
                _a = [arr[k + 1], arr[k]], arr[k] = _a[0], arr[k + 1] = _a[1];
            }
        }
    }
    return arr;
};
console.log(sort(randomArr(10, 0, 1000)));
