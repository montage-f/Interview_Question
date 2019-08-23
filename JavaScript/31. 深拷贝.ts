/**
 * Created by MonTage_fz on 2019/8/15
 */
const list_deep = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]
            
        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];

const deepCopy = (obj: Array<any> | object) => {
    const result = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        // 原型上没有这个属性,则返回true, 否则则返回false
        if (obj.hasOwnProperty(i)) {
            if (typeof obj[i] === 'object') {
                result[i] = deepCopy(obj[i]);
            } else {
                result[i] = obj[i];
            }
        }
    }
    return result;
};
let i = deepCopy(list_deep);
i[0].id = 2222;
console.log(i);
console.log(list_deep);

