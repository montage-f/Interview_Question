/**
 * Created by MonTage_fz on 2019/8/1
 */
let q = [1, 2, 2, 3, 2, 1];
let w = [2, 3, 2];

const intersect = (arr1, arr2): Array<number> => {
    let map = {};
    let result = [];
    for (let i of arr1) {
        if (map[i]) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    
    for (let i of arr2) {
        if (map[i] > 0) {
            result.push(i);
            map[i]--;
        }
    }
    return result;
};
console.log(intersect(q, w));


