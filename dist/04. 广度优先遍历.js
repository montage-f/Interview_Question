/**
 * Created by MonTage_fz on 2019/7/24
 */
// 广度优先, 从顶点v出发之后, 然后就依次访问各个未曾访问过的邻节点,
// 然后分别从他们的邻节点出发, 依次访问他们的邻节点, 广度优先比深度优先要快,
var dom1 = document.querySelector('.parent');
var widthTraversal_1 = function (node) {
    var nodes = [];
    var stack = [];
    if (!node)
        return;
    stack.push(node); // 先进
    while (stack.length) {
        var item = stack.shift(); // 先出
        var children = item.children;
        nodes.push(item);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var i_1 = children_1[_i];
            stack.push(i_1);
        }
    }
    return nodes;
};
console.time('计时器:');
console.log(widthTraversal_1(dom1));
console.timeEnd('计时器:');
