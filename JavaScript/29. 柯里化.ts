/**
 * Created by MonTage_fz on 2019/8/14
 */
const addValue = (...rest): number => rest.reduce((a, b) => a + b);
console.log(addValue(1, 2));

const currying = (fn: Function): Function => {
    let args = [];
    const result = (...rest) => {
        if (!rest.length) {
            return fn(...args);
        } else {
            args.push(...rest);
            return result;
        }
    };
    return result;
};
let sum = currying(addValue);
sum(1, 2)(3, 4, 5);
console.log(sum());



