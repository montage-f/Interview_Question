/**
 * Created by MonTage_fz on 2019/9/9
 */
var longest = function (s1, s2) {
    var str = "" + s1 + s2;
    var list = str.split('').sort(function (a, b) { return a.charCodeAt(0) - b.charCodeAt(0); });
    return Array.from(new Set(list)).join('');
};
console.log(longest('abc', 'abc'));
