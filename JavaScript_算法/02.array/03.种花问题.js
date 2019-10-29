/**
 * Created by MonTage_fz on 2019/10/29
 */
// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。
// 可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
//
// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。
// 能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
//
// 示例 1:
// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True
//
// 示例 2:
// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False
// 注意:
//     1.数组内已种好的花不会违反种植规则。
//     2.输入的数组长度范围为 [1, 20000]。
//     3.n 是非负整数，且不会超过输入数组的大小。

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export const canPlaceFlowers = function (flowerbed, n) {
    // 用于记录该地里面最多可以种植多少花
    let maxFlowers = 0;
    flowerbed.push(0);
    flowerbed.unshift(0);
    const len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        // 只在这个值等于0 的时候, 才去判断他的前后位置, 是否符合种花条件'
        if (Object.is(flowerbed[i - 1], 0) && Object.is(flowerbed[i], 0) && Object.is(flowerbed[i + 1], 0)) {
            flowerbed[i] = 1;
            maxFlowers++;
        }
    }
    return maxFlowers >= n;
};

export const canPlaceFlowers_2 = function (flowerbed, n) {
    let count = 1, sum = 0;
    for (const key of flowerbed) {
        if (key === 1) {
            if (count > 1) sum += Math.floor((count - 1) / 2);
            count = 0;
        } else {
            count++;
        }
    }
    if (count > 1) sum += Math.floor(count / 2);
    return sum >= n;
};

