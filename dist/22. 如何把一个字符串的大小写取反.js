/**
 * Created by MonTage_fz on 2019/8/2
 */
// 问题 AbC 转换成 aBc
var formatChart = function (str) {
    var min = 'abcdefghijklmnopqrstuvwxyz';
    var s = '';
    for (var i_1 = 0; i_1 < str.length; i_1++) {
        var num_1 = min.indexOf(str[i_1]);
        if (num_1 >= 0) {
            s += str[num_1].toUpperCase();
        }
        else {
            s += str[i_1].toLowerCase();
        }
    }
    return s;
};
console.log(formatChart('AbC'));
// 方法二
var formatChart_2 = function (str) {
    return str.split('').map(function (v) { return v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase(); })
        .join('');
};
console.log(formatChart_2('AbC'));
