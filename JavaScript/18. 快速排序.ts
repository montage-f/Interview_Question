/**
 * Created by MonTage_fz on 2019/8/1
 */
let d = [8, 4, 90, 8, 34, 67, 1, 26, 17];

const quicklySort = (arr): Array<number> => {
    if (arr.length <= 1) return arr;
    
    // 取一个值作为标杆
    let pivotIndex: number = Math.floor(arr.length / 2);
    // 标杆
    let pivot: number = arr.splice(pivotIndex, 1)[0];
    // 定义两个数组, 一个用来存放 在比标高小的数, 一个用来存放比标杆大的数
    let left: Array<number> = [];
    let right: Array<number> = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicklySort(left), pivot, ...quicklySort(right)];
};
console.log(quicklySort(d));

