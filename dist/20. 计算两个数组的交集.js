/**
 * Created by MonTage_fz on 2019/8/1
 */
var q = [1, 2, 2, 3, 2, 1];
var w = [2, 3, 2];
var intersect = function (arr1, arr2) {
    var map = {};
    var result = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i_1 = arr1_1[_i];
        if (map[i_1]) {
            map[i_1]++;
        }
        else {
            map[i_1] = 1;
        }
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var i_2 = arr2_1[_a];
        if (map[i_2] > 0) {
            result.push(i_2);
            map[i_2]--;
        }
    }
    return result;
};
console.log(intersect(q, w));
// 随机生成一个长度为 10 的整数类型的数组，
// 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，
// 例如 [[2, 3, 4, 5], [10, 11], [20]]
// 随机生成一个长度为10的数组
var randomFun = function (length, min, max) {
    return Array.from({ length: length }, function () { return Math.round(min + Math.random() * (max - min)); })
        .sort(function (a, b) { return a - b; });
};
var formArr = function (arr) {
    var obj = {};
    var newArr = [];
    Array.from(new Set(arr)).forEach(function (item) {
        var intNum = Math.floor(item / 10);
        if (!obj[intNum]) {
            obj[intNum] = [];
        }
        obj[intNum].push(item);
    });
    for (var i_3 in obj) {
        newArr.push(obj[i_3]);
    }
    return newArr;
};
console.log(formArr(randomFun(10, 10, 100)));
