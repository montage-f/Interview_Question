/**
 * Created by MonTage_fz on 2019/9/9
 */

// 给定一串单词，您需要找到得分最高的单词。
// 一个单词的每个字母根据其在字母表中的位置得分：a = 1, b = 2, c = 3等等
// 您需要将得分最高的单词作为字符串返回。
// 如果两个单词得分相同，则返回原始字符串中最早出现的单词。
// 所有字母都是小写的，所有输入都是有效的。

const height = (sentence) => {
    const wordList = sentence.split(' ');
    const all = wordList.map((item, index) => {
        return {
            count: item.toUpperCase().split('').reduce((p, i) => {
                return p + i.charCodeAt(0) - 64;
            }, 0),
            world: item
        };
    });
    return all.sort((a, b) => b.count - a.count)[0].world;
};
console.log(height('man i need a taxi up to ubud'));
console.log(height('what time are we climbing up the volcano'));
console.log(height('take me to semynak'));
