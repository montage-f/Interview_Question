/**
 * Created by MonTage_fz on 2019/8/2
 */
// 问题 AbC 转换成 aBc

const formatChart = (str: string): string => {
    let min = 'abcdefghijklmnopqrstuvwxyz';
    let s = '';
    for (let i = 0; i < str.length; i++) {
        let num = min.indexOf(str[i]);
        if (num >= 0) {
            s += str[num].toUpperCase();
        } else {
            s += str[i].toLowerCase();
        }
    }
    return s;
};
console.log(formatChart('AbC'));


// 方法二
const formatChart_2 = (str: string): string =>
    str.split('').map(v => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase())
    .join('');

console.log(formatChart_2('AbC'));
