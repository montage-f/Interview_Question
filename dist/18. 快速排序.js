/**
 * Created by MonTage_fz on 2019/8/1
 */
var d = [8, 4, 90, 8, 34, 67, 1, 26, 17];
var quicklySort = function (arr) {
    if (arr.length <= 1)
        return arr;
    // 取一个值作为标杆
    var pivotIndex = Math.floor(arr.length / 2);
    // 标杆
    var pivot = arr.splice(pivotIndex, 1)[0];
    // 定义两个数组, 一个用来存放 在比标高小的数, 一个用来存放比标杆大的数
    var left = [];
    var right = [];
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] < pivot) {
            left.push(arr[i_1]);
        }
        else {
            right.push(arr[i_1]);
        }
    }
    return quicklySort(left).concat([pivot], quicklySort(right));
};
console.log(quicklySort(d));
