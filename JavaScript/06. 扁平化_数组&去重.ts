/**
 * Created by MonTage_fz on 2019/7/26
 */
const list: Array<any> = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// 递归扁平化, 循环去重
const flatFun = (list: Array<any>): Array<any> => {
    let arr: any = [];
    // 扁平化
    let map = (list: Array<any>): void => {
        list.forEach(item => {
            if (item instanceof Array) {
                map(item);
            } else {
                arr.push(item);
            }
        });
    };
    map(list);
    // 去重
    let result: any = [];
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                // 这里需要注意的是, 前置 ++ 表示即赋值且自增
                k = ++i;
                // 如果写成后置++ 那么需要向下面的表达一样
                // i++
                // k=i
            }
        }
        result.push(arr[i]);
    }

    return result;
};
console.log(flatFun(list));


// reduce扁平化, 排序递归去重
const flatFun_2 = (list: Array<any>): Array<any> => {
    // reduce 递归扁平化数组
    let flat = (list) => {
        return list.reduce((p, i) => {
            if (i instanceof Array) {
                return p.concat(flat(i));
            } else {
                return p.concat(i);
            }
        }, []);
    };
    let arr = flat(list);
    // 排序, 方便剔除数组
    arr.sort((a, b) => a - b);
    // 倒序递归查找, 找到相同的删除
    const f = (index: number): void => {
        if (!index) return;
        if (arr[index] === arr[index - 1]) {
            arr.splice(index, 1);
        }
        f(index - 1);

    };
    let len = arr.length;
    f(len - 1);
    return arr;
};
console.log(flatFun_2(list));

// 使用数组的方法flat 扁平化数组, 使用 new Set() 函数去重
const flatFun_3 = (list): Array<any> => Array.from(new Set(list.flat(Infinity)));
console.log(flatFun_3(list));
