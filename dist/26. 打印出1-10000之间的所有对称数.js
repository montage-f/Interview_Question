/**
 * Created by MonTage_fz on 2019/8/6
 */
var doubleNumber = Array.from({ length: 10000 }, function (item, index) { return index; })
    .filter(function (item) { return item > 10 && item === Number(item.toString().split('').reverse().join('')); });
console.log(doubleNumber);
