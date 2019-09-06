/**
 * Created by MonTage_fz on 2019/9/6
 */

// 给定：包含名称哈希的数组
// 返回：一个字符串，格式为由逗号分隔的名称列表，但最后两个名称除外，这两个名称应用＆符号分隔。

// 我的答案
interface IData {
    name: string
}

const list = (data: IData[]): string => {
    const names = data.map((item) => item.name);
    if (!data.length) return '';
    if (data.length === 2) {
        return `${names.slice(-2).join(' & ')}`;
    } else if (data.length === 1) {
        return names.join('');
    }
    return `${names.slice(0, -2).join(', ')}, ${names.slice(-2).join(' & ')}`;
};
console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}]));
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(`------------`);

// 别人的代码
const list1 = (data: IData[]): string => {
    return data.reduce((p, {name}, index, arr) => {
        if (index === 0) {
            return name;
        } else if (index === arr.length - 1) {
            return `${p} & ${name}`;
        } else {
            return `${p}, ${name}`;
        }
    }, '');
};
console.log(list1([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
console.log(list1([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}]));
console.log(list1([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list1([{name: 'Bart'}]));
console.log(`------------`);

const list2 = (data: IData[]): string => {
    const xs = data.map(v => v.name);
    const x = xs.pop();
    return xs.length ? `${xs.join(', ')} & ${x}` : x || '';
};
console.log(list2([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
console.log(list2([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}]));
console.log(list2([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list2([{name: 'Bart'}]));
