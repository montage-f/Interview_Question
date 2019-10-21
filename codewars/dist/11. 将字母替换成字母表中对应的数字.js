/**
 * Created by MonTage_fz on 2019/9/9
 */
// 你需要给一个字符串，用字母表中的位置替换每个字母。
// 如果文本中的任何内容不是字母，请忽略它并且不返回它。
// "a" = 1，"b" = 2等等。
var alphabetPosition = function (text) {
    var map = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce(function (p, i, index) {
        p[i] = index + 1;
        return p;
    }, {});
    var str = '';
    text = text.toLowerCase();
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var key = text_1[_i];
        if (map[key]) {
            str += map[key] + " ";
        }
        else {
            str += '';
        }
    }
    return str.trim();
};
console.log(alphabetPosition('The sunset sets at twelve o\' clock.'));
// 别人的代码
var alphabetPosition1 = function (text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        // 'A'.charCodeAt(0)  => 65
        .map(function (c) { return c.charCodeAt(0) - 64; })
        .join(' ');
};
console.log(alphabetPosition1('The sunset sets at twelve o\' clock.'));
