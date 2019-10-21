/**
 * Created by MonTage_fz on 2019/9/6
 */
// 找到出现基数次的数字
// [1,1,1,1,1,1,10,1,1,1,1] => 10
// [1,1,3] => 3
// [1,1,3,3,2] => 2
// [1,1,3,3,2,2,2] => 2
// 我的答案
var findOddTime = function (arr) {
    var list = Array.from(new Set(arr));
    var map = {};
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        map[i] = 0;
    }
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var i = arr_1[_a];
        map[i] += 1;
    }
    for (var key in map) {
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
var findOddTime1 = function (arr) {
    var map = {};
    arr.forEach(function (item) {
        map[item] ? map[item]++ : map[item] = 1;
    });
    for (var key in map) {
        if (map[key] % 2 !== 0) {
            return +key;
        }
    }
};
console.log(findOddTime1([1, 1, 3, 3, 2, 2, 0, 0, 0]));
