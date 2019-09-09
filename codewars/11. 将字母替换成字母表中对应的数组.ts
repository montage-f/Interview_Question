/**
 * Created by MonTage_fz on 2019/9/9
 */
// 你需要给一个字符串，用字母表中的位置替换每个字母。
// 如果文本中的任何内容不是字母，请忽略它并且不返回它。
// "a" = 1，"b" = 2等等。

const alphabetPosition = (text: string): string => {
    const map = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((p, i, index) => {
        p[i] = index + 1;
        return p;
    }, {});
    let str = '';
    text = text.toLowerCase();
    for (let key of text) {
        if (map[key]) {
            str += `${map[key]} `;
        } else {
            str += '';
        }
    }
    return str.trim();
};
console.log(alphabetPosition('The sunset sets at twelve o\' clock.'));


// 别人的代码
const alphabetPosition1 = (text) => {
    return text
    .toUpperCase()
    .match(/[a-z]/gi)
    // 'A'.charCodeAt(0)  => 65
    .map((c) => c.charCodeAt(0) - 64)
    .join(' ');
};
console.log(alphabetPosition1('The sunset sets at twelve o\' clock.'));
