/**
 * Created by MonTage_fz on 2019/9/4
 */
    // 选择排序, 先要找出数组里面最小的一个值, 并记录他的索引,
    // 然后替换他和目标值的位置,
    // 当目标值和最小值索引相等时, 位置不变
const list1 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];

for (let j = 0; j < list1.length; j++) {
    let minIndex = j;
    for (let i = j; i < list1.length; i++) {
        if (list1[minIndex] > list1[i]) {
            minIndex = i;
        }
    }
    if (minIndex !== j) {
        [list1[j], list1[minIndex]] = [list1[minIndex], list1[j]];
    }
}
console.log(list1);

// 冒泡排序
const list2 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];
for (let i = 0; i < list2.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list2[j] > list2[j + 1]) {
            [list2[j + 1], list2[j]] = [list2[j], list2[j + 1]];
        }
    }
}
console.log(list2);


// 快速排序
const list3 = [3, 4, 5, 2, 1, 2, 3, 6, 7, 9, 8, 0];
const quicklySort1 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const length = arr.length;
    //  下面在哪个循环不能直接使用上面的length,
    //  因为flat的时候, 改变了数组的长度, 下面会出现一个undefined,
    //  undefined 与任何右边数组的数比较, 都是小于 ,所以会造成死循环
    // 所以需要写成 length - 1 ,
    const flag = arr.splice(Math.floor(length / 2), 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] < flag) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicklySort1(left), flag, ...quicklySort1(right)];
};
console.log(quicklySort1(list3));
