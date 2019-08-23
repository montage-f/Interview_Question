/**
 * Created by MonTage_fz on 2019/7/24
 */
// 深度优先遍历, 从一个顶点v出发, 然后依次从他各个未被访问的领节点出发深度优先搜索遍历图,
// 直至途中所有和v有路径相同的点都北方问道
var dom = document.querySelector('.parent');
var deepTraversal_1 = function (node, nodeList) {
    if (nodeList === void 0) { nodeList = []; }
    if (!node)
        return;
    nodeList.push(node);
    var children = node.children;
    for (var i_1 = 0; i_1 < children.length; i_1++) {
        deepTraversal_1(children[i_1], nodeList);
    }
    return nodeList;
};
console.time('计时器:');
console.log(deepTraversal_1(dom));
console.timeEnd('计时器:');
var arr = [
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
var deepTraversal_2 = function (list) {
    var result = [];
    var map = function (i) {
        result.push(i.name);
        i.children && i.children.forEach(function (v) { return map(v); });
    };
    list.forEach(function (item) {
        map(item);
    });
    return result;
};
console.log(deepTraversal_2(arr));
