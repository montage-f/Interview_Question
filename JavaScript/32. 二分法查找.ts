/**
 * Created by montage_fz on 2019-08-20
 */
let arrs = [1, 4, 7, 8, 12, 34, 67, 88, 99, 100];
// 二分法有一个需要注意的地方, 数组必须是从小到大, 或者从大到小的顺序.
const getIndex = (arr: number[], num: number) => {
    let list = [...arr];
    let start = 0;
    let end = list.length - 1;
    let n = 0;
    while (start <= end) {
        let i = Math.floor((start + end) / 2);
        n++;
        if (num === arr[i]) {
            return {
                i, n
            };
        }
        if (num > arr[i]) {
            start = i + 1;
        }
        if (num <= arr[i]) {
            end = i - 1;
        }
    }
    
};
console.log(getIndex(arrs, 100));
