/**
 * Created by montage_fz on 2019-08-20
 */
var arrs = [1, 4, 7, 8, 12, 34, 67, 88, 99, 100];
// 二分法有一个需要注意的地方, 数组必须是从小到大, 或者从大到小的顺序.
var getIndex = function (arr, num) {
    var list = arr.slice();
    var start = 0;
    var end = list.length - 1;
    var n = 0;
    while (start <= end) {
        var i_1 = Math.floor((start + end) / 2);
        n++;
        if (num === arr[i_1]) {
            return {
                i: i_1, n: n
            };
        }
        if (num > arr[i_1]) {
            start = i_1 + 1;
        }
        if (num <= arr[i_1]) {
            end = i_1 - 1;
        }
    }
};
console.log(getIndex(arrs, 100));
