/**
 * Created by MonTage_fz on 2019/7/31
 */
var ar = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];
var flat_1 = function (arr) { return arr.reduce(function (p, i) { return Array.isArray(i) ? p.concat(flat_1(i)) : p.concat(i); }, []); };
console.log(flat_1(ar));
// 列队
var flat_2 = function (arr) {
    var newArr = arr.slice();
    var stack = [];
    while (newArr.length) {
        var item = newArr.shift();
        Array.isArray(item) ? newArr.unshift.apply(newArr, item) : stack.push(item);
    }
    return stack;
};
console.log(flat_2(ar));
