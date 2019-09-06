/**
 * Created by MonTage_fz on 2019/9/6
 */
// 输出要求如下
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
// 自己的答案:
var order = function (sentence) {
    if (!sentence)
        return sentence;
    var list = sentence.split(' ');
    var mapList = list.map(function (item) {
        var num = item.match(/[1-9]/)[0];
        return {
            name: item,
            value: +num
        };
    });
    return mapList.sort(function (a, b) { return a.value - b.value; }).map(function (v) { return v.name; }).join(' ');
};
console.log(order('abc1 bcd2 dad7 bcd4 bcd6'));
// 别人的答案
var order2 = function (sentence) {
    return sentence.split(' ').sort(function (a, b) { return +a.match(/\d/) - +b.match(/\d/); }).join(' ');
};
console.log(order2('abc1 bcd2 dad7 bcd4 bcd6'));
