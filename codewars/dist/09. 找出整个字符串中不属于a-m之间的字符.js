/**
 * Created by MonTage_fz on 2019/9/9
 */
var printerError = function (str) {
    var lenght = str.length;
    // ^ 在中括号里面表示非, 在中括号外面表示以...开头
    var reg = /[^a-m]/ig;
    var count = str.match(reg) && str.match(reg).length;
    return (count || 0) + "/" + lenght;
};
console.log(printerError(''));
