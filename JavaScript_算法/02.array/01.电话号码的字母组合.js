/**
 * Created by MonTage_fz on 2019/10/22
 */
//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 九宫格电话键
// 1 => !@#,  2 => abc, 3 => def
// 4 => ghi,  5 => jkl, 6 => mno
// 7 => pqrs, 8 => tuv, 9 => wxyz

// 示例
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
]);


/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = (digits) => {
    // 先将字符串转成数组
    const digitsToArr = digits.split('');
    const mapList = [];
    digitsToArr.forEach((item) => {
        if (map.has(item)) {
            mapList.push(map.get(item));
        }
    });
    return chargeMapList(mapList);
};

const chargeMapList = (mapList) => {
    let result = [];
    for (let i = 0; i < mapList[0].length; i++) {
        for (let j = 0; j < mapList[1].length; j++) {
            result.push(mapList[0][i] + mapList[1][j]);
        }
    }
    mapList.splice(0, 2, result);
    if (mapList.length > 1) {
        return chargeMapList(mapList);
    } else {
        return result;
    }
};

// 方法二

/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations_2 = (digits) => {
    return digits.split('')
    .map((num) => {
        if (map.has(num)) {
            return map.get(num).split('');
        }
    })
    .reduce((p, i) => {
        const result = [];
        for (let k of p) {
            for (let j of i) {
                result.push(k + j);
            }
        }
        return result;
    });
};
