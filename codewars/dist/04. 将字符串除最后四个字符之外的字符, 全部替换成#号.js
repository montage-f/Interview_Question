/**
 * Created by MonTage_fz on 2019/9/6
 */
// 规则
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
//
// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
// 我的代码
var mask = function (words) {
    var startToEndFour = words.slice(0, -4);
    var endFour = words.slice(-4);
    return startToEndFour.replace(/\w+/i, function (w) { return w.split('').map(function (v) { return '#'; }).join(''); }) + endFour;
};
console.log(mask('4556364607935616'));
console.log(mask('64607935616'));
console.log(mask('1'));
console.log(mask(''));
// 别人的代码
var mask1 = function (words) {
    return "" + words.slice(0, -4).replace(/./g, '#') + words.slice(-4);
};
console.log(mask1('4556364607935616'));
console.log(mask1('64607935616'));
console.log(mask1('1'));
console.log(mask1(''));
