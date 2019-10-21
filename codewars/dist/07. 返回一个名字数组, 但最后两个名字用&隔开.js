/**
 * Created by MonTage_fz on 2019/9/6
 */
var list = function (data) {
    var names = data.map(function (item) { return item.name; });
    if (!data.length)
        return '';
    if (data.length === 2) {
        return "" + names.slice(-2).join(' & ');
    }
    else if (data.length === 1) {
        return names.join('');
    }
    return names.slice(0, -2).join(', ') + ", " + names.slice(-2).join(' & ');
};
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }]));
console.log("------------");
// 别人的代码
var list1 = function (data) {
    return data.reduce(function (p, _a, index, arr) {
        var name = _a.name;
        if (index === 0) {
            return name;
        }
        else if (index === arr.length - 1) {
            return p + " & " + name;
        }
        else {
            return p + ", " + name;
        }
    }, '');
};
console.log(list1([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list1([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
console.log(list1([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list1([{ name: 'Bart' }]));
console.log("------------");
var list2 = function (data) {
    var xs = data.map(function (v) { return v.name; });
    var x = xs.pop();
    return xs.length ? xs.join(', ') + " & " + x : x || '';
};
console.log(list2([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list2([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
console.log(list2([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list2([{ name: 'Bart' }]));
