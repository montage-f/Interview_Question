/**
 * Created by MonTage_fz on 2019/7/26
 */
var list = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 递归扁平化, 循环去重
var flatFun = function (list) {
    var arr = [];
    // 扁平化
    var map = function (list) {
        list.forEach(function (item) {
            if (item instanceof Array) {
                map(item);
            }
            else {
                arr.push(item);
            }
        });
    };
    map(list);
    // 去重
    var result = [];
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        for (var k = i_1 + 1; k < arr.length; k++) {
            if (arr[i_1] === arr[k]) {
                // 这里需要注意的是, 前置 ++ 表示即赋值且自增
                k = ++i_1;
                // 如果写成后置++ 那么需要向下面的表达一样
                // i++
                // k=i
            }
        }
        result.push(arr[i_1]);
    }
    return result;
};
console.log(flatFun(list));
// reduce扁平化, 排序递归去重
var flatFun_2 = function (list) {
    // reduce 递归扁平化数组
    var flat = function (list) {
        return list.reduce(function (p, i) {
            if (i instanceof Array) {
                return p.concat(flat(i));
            }
            else {
                return p.concat(i);
            }
        }, []);
    };
    var arr = flat(list);
    // 排序, 方便剔除数组
    arr.sort(function (a, b) { return a - b; });
    // 倒序递归查找, 找到相同的删除
    var f = function (index) {
        if (!index)
            return;
        if (arr[index] === arr[index - 1]) {
            arr.splice(index, 1);
        }
        f(index - 1);
    };
    var len = arr.length;
    f(len - 1);
    return arr;
};
console.log(flatFun_2(list));
// 使用数组的方法flat 扁平化数组, 使用 new Set() 函数去重
var flatFun_3 = function (list) { return Array.from(new Set(list.flat(Infinity))); };
console.log(flatFun_3(list));
