/**
 * Created by MonTage_fz on 2019/10/24
 */
// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 示例 1：
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

// 示例 2：
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。


/**
 * @param {number[]} deck
 * @return {boolean}
 */
// 这个地方有个问题, 如果是三个三个一组的话, 就会报错, 也就是, 当前函数, 只能以2张卡片为一组
const hasGroupsSizeX = (deck) => {
    const result = deck.sort((a, b) => a - b);
    const resultLength = Math.floor(result.length / 2);
    if (resultLength < 1) return false;
    const arr = [];
    for (let i = 0; i < resultLength; i++) {
        arr.push(result.splice(0, 2));
    }
    return arr.map(([key, value]) => {
        return key === value;
    })
    .every(item => item);
};

//
const hasGroupsSizeX_2 = (deck) => {
    // 循环之后, 就会拿到每一组值的个数,
    // 这个时候, 我们就知道, 最小组的长度,
    // 如果最小组的长度为偶数, 则应该取他的最大公约数为一组的长度
    // 然后, 后面的数值只要是最小长度的整数倍, 那么就满足这个题目的要求
    if (deck.length <= 1) return false;
    const descObj = deck.sort((a, b) => a - b).reduce((p, i) => {
        p[i] = p[i] ? p[i] + 1 : p[i] = 1;
        return p;
    }, {});
    const group = Object.values(descObj);
    // 求最大公约数
    const gcd = (a, b) => {
        let result = 1;
        let i = 0;
        while (i <= a && i <= b) {
            if (a % i === 0 && b % i === 0) {
                result = i;
            }
            i++;
        }
        return result;
    };
    while (group.length > 1) {
        const a = group.shift();
        const b = group.shift();
        const v = gcd(a, b);
        if (v === 1) {
            return false;
        }
        group.unshift(v);
    }
    return group[0] > 1;
};
console.log(hasGroupsSizeX_2([1, 1, 1, 2, 2, 2, 8, 3, 3, 3]));
