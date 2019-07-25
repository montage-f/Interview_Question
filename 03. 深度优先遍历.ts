/**
 * Created by MonTage_fz on 2019/7/24
 */
// 深度优先遍历, 从一个顶点v出发, 然后依次从他各个未被访问的领节点出发深度优先搜索遍历图,
// 直至途中所有和v有路径相同的点都北方问道
let dom: Element = document.querySelector('.parent');

interface IDeepTraversal {
    (node: Element, nodeList?: Element[]): Element[]
}

// 在typeScript中, 当有类型使用object类型的时候, 使用interface来替换这个object
interface IObject {
    name: string,
    children: object[]
}


interface IDeepTraversal_2 {
    (list: IObject[]): any[]
}


const deepTraversal_1: IDeepTraversal = (node, nodeList = []) => {
    if (!node) return;
    nodeList.push(node);
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
        deepTraversal_1(children[i], nodeList);
    }
    return nodeList;
};

console.log(deepTraversal_1(dom));

let arr = [
    {
        name: '1',
        children: [
            {
                name: '1-1',
                children: [
                    {
                        name: '1-1-1'
                    }
                ]
            },
            {
                name: '1-2',
                children: [
                    {
                        name: '1-2-1',
                        children: [
                            {
                                name: '1-2-1-1'
                            }
                        ]
                    },
                    {
                        name: '1-2-2'
                    }
                ]
            },
            {
                name: '1-3'
            }
        ],
        
    }
];

const deepTraversal_2: IDeepTraversal_2 = (list) => {
    let result = [];
    let map = (i: { name: string, children: any[] }) => {
        result.push(i.name);
        i.children && i.children.forEach(v => map(v));
    };
    list.forEach(item => {
        map(item);
    });
    return result;
    
};
console.log(deepTraversal_2(arr));
