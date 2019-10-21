/**
 * Created by MonTage_fz on 2019/10/21
 */
//给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 示例 1:
//
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"

export default (str) => {
    return str.split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
};
