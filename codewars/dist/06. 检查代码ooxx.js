/**
 * Created by MonTage_fz on 2019/9/6
 */
// 检查字符串是否具有相同数量的'x'和'o'。
// 该方法必须返回一个布尔值并且不区分大小写。该字符串可以包含任何char
// 代码输出
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// 我的方法
var XO = function (str) {
    str = str.toLowerCase();
    if (!str.includes('x') && !str.includes('o'))
        return true;
    var x = '';
    var o = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            o += str[i];
        }
        if (str[i] === 'x') {
            x += str[i];
        }
    }
    return x.length === o.length;
};
console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
console.log('----------------------');
// 别人的方法
var XO1 = function (str) {
    var o = str.match(/o/gi);
    var x = str.match(/x/gi);
    return (o && o.length) === (x && x.length);
};
console.log(XO1('ooxx'));
console.log(XO1('xooxx'));
console.log(XO1('ooxXm'));
console.log(XO1('zpzpzpp'));
console.log(XO1('zzoo'));
console.log('----------------------');
var XO2 = function (str) {
    str = str.toLowerCase();
    var strA = str.split('');
    return strA.filter(function (v) { return v === 'o'; }).length === strA.filter(function (v) { return v === 'x'; }).length;
};
console.log(XO2('ooxx'));
console.log(XO2('xooxx'));
console.log(XO2('ooxXm'));
console.log(XO2('zpzpzpp'));
console.log(XO2('zzoo'));
