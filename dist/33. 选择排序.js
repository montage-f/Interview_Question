var _a, _b;
/**
 * Created by MonTage_fz on 2019/9/4
 */
// 选择排序, 先要找出数组里面最小的一个值, 并记录他的索引,
// 然后替换他和目标值的位置,
// 当目标值和最小值索引相等时, 位置不变
var list1 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];
for (var j = 0; j < list1.length; j++) {
    var minIndex = j;
    for (var i_1 = j; i_1 < list1.length; i_1++) {
        if (list1[minIndex] > list1[i_1]) {
            minIndex = i_1;
        }
    }
    if (minIndex !== j) {
        _a = [list1[minIndex], list1[j]], list1[j] = _a[0], list1[minIndex] = _a[1];
    }
}
console.log(list1);
// 冒泡排序
var list2 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];
for (var i_2 = 0; i_2 < list2.length; i_2++) {
    for (var j = 0; j < list2.length; j++) {
        if (list2[j] > list2[j + 1]) {
            _b = [list2[j], list2[j + 1]], list2[j + 1] = _b[0], list2[j] = _b[1];
        }
    }
}
console.log(list2);
// 快速排序
var list3 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];
var quicklySort1 = function (arr) {
    if (arr.length <= 1)
        return arr;
    var length = arr.length;
    //  下面在哪个循环不能直接使用上面的length,
    //  因为flat的时候, 改变了数组的长度, 下面会出现一个undefined,
    //  undefined 与任何右边数组的数比较, 都是小于 ,所以会造成死循环
    // 所以需要写成 length - 1 ,
    var flag = arr.splice(Math.floor(length / 2), 1)[0];
    var left = [];
    var right = [];
    for (var i_3 = 0; i_3 < length - 1; i_3++) {
        if (arr[i_3] < flag) {
            left.push(arr[i_3]);
        }
        else {
            right.push(arr[i_3]);
        }
    }
    return quicklySort1(left).concat([flag], quicklySort1(right));
};
console.log(quicklySort1(list3));
