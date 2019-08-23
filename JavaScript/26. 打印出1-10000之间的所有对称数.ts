/**
 * Created by MonTage_fz on 2019/8/6
 */
let doubleNumber = Array.from({length: 10000}, (item, index) => index)
    .filter(item => item > 10 && item === Number(item.toString().split('').reverse().join('')))
;
console.log(doubleNumber);
