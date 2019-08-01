/**
 * Created by MonTage_fz on 2019/8/1
 */
var q = [1, 2, 2, 3, 2, 1];
var w = [2, 3, 2];
var intersect = function (arr1, arr2) {
    var map = {};
    var result = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (map[i]) {
            map[i]++;
        }
        else {
            map[i] = 1;
        }
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var i = arr2_1[_a];
        if (map[i] > 0) {
            result.push(i);
            map[i]--;
        }
    }
    return result;
};
console.log(intersect(q, w));
