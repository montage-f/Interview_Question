/**
 * Created by MonTage_fz on 2019/7/31
 */
const ar = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

const flat_1 = (arr) => arr.reduce((p, i) => Array.isArray(i) ? [...p, ...flat_1(i)] : [...p, ...i], []);
console.log(flat_1(ar));


// 列队

const flat_2 = (arr) => {
    let newArr = [...arr];
    let stack = [];
    while (newArr.length) {
        let item = newArr.shift();
        Array.isArray(item) ? newArr.unshift(...item) : stack.push(item);
    }
    return stack;
};
console.log(flat_2(ar));
