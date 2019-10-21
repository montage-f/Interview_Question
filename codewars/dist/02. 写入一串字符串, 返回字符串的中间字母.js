/**
 * Created by MonTage_fz on 2019/9/6
 */
// 输出要求如下
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// 我的答案
var getMiddle = function (world) {
    var length = world.length;
    var isZero = length % 2;
    if (!isZero) {
        return world.substring(length / 2 - 1, length / 2 + 1);
    }
    return world.substring(~~(length / 2), ~~(length / 2) + 1);
};
console.log(getMiddle('testtTTssaaa'));
// 别人的答案
var getMiddle1 = function (world) {
    var length = world.length;
    var isZero = length % 2;
    return world.substr(Math.ceil(length / 2 - 1), !isZero ? 2 : 1);
};
console.log(getMiddle1('testtTTssaaa'));
