/**
 * Created by MonTage_fz on 2019/7/24
 */
// 广度优先, 从顶点v出发之后, 然后就依次访问各个未曾访问过的邻节点,
// 然后分别从他们的邻节点出发, 依次访问他们的邻节点, 广度优先比深度优先要快,

interface IWidthTraversal_1 {
    (node: Element): Element[]
}

let dom1: Element = document.querySelector('.parent');
const widthTraversal_1: IWidthTraversal_1 = (node) => {
    let nodes: any[] = [];
    let stack: any[] = [];
    if (!node) return;
    stack.push(node);  // 先进
    while (stack.length) {
        let item = stack.shift(); // 先出
        let children = item.children;
        nodes.push(item);
        for (let i of children) {
            stack.push(i);
        }
    }
    return nodes;
};
console.time('计时器:');
console.log(widthTraversal_1(dom1));
console.timeEnd('计时器:');


