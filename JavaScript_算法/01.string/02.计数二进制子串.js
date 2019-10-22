/**
 * Created by MonTage_fz on 2019/10/22
 */
// 给定一个字符串 str，
// 计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
//
// 重复出现的子串要计算它们出现的次数。
//
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
//
// 请注意，一些重复出现的子串要计算它们出现的次数。
//
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
//
// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。

// 0011 0011 => 0011
// 0 01 10011 => 01
// 00 1100 11 => 1100
// 001 10 011 => 10
// 0011 0011 => 0011
// 00110 01 1 => 01


/**
 * @param {string} str
 * @return {number}
 */
export const countBinarySubstrings = (str) => {
    const list = [];
    for (let i = 0; i < str.length - 1; i++) {
        let result = match(str.slice(i));
        if (result) {
            list.push(result);
        }
    }
    return list.length;
};
const match = (str) => {
    let ZERO = 0;
    let ONE = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            ZERO++;
        } else if (str[i] === '1') {
            ONE++;
        }
        if (ZERO === ONE) {
            return str.slice(0, i + 1);
        }
    }
};
