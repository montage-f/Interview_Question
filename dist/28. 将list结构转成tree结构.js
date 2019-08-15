/**
 * Created by MonTage_fz on 2019/8/6
 */
var allList = [
    { ids: 1, parentId: 0, name: 'Foods', },
    { ids: 2, parentId: 1, name: 'Fruits' },
    { ids: 3, parentId: 1, name: 'Vegetables' },
    { ids: 4, parentId: 2, name: 'apple' },
    { ids: 5, parentId: 2, name: 'orange' },
    { ids: 6, parentId: 3, name: 'tomato' },
    { ids: 7, parentId: 3, name: 'carrot' },
    { ids: 8, parentId: 3, name: 'cabbage' },
    { ids: 9, parentId: 3, name: 'potato' },
    { ids: 10, parentId: 3, name: 'lettuce' },
    { ids: 11, parentId: 0, name: 'Foods' },
    { ids: 12, parentId: 11, name: 'Fruits' },
    { ids: 13, parentId: 11, name: 'Vegetables' },
    { ids: 14, parentId: 12, name: 'apple' },
    { ids: 15, parentId: 12, name: 'orange' },
    { ids: 16, parentId: 13, name: 'tomato' },
    { ids: 17, parentId: 13, name: 'carrot' },
    { ids: 18, parentId: 13, name: 'cabbage' },
    { ids: 19, parentId: 13, name: 'potato' },
    { ids: 20, parentId: 13, name: 'lettuce' }
];
var listToTree = function (myId, PId, list) {
    // 判断是否有父节点
    var isPId = function (PId, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i][myId] === PId) {
                return true;
            }
        }
        return false;
    };
    // 最顶层的节点
    var nodes = [];
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        // 如果没有父节点, 那么就是顶层节点
        if (!isPId(item[PId], list)) {
            nodes.push(item);
        }
    }
    var toDo = [];
    for (var i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
    while (toDo.length) {
        var PNode = toDo.shift();
        for (var i = 0; i < list.length; i++) {
            var row = list[i];
            if (row[PId] === PNode[myId]) {
                if (PNode.children instanceof Array) {
                    PNode.children.push(row);
                }
                else {
                    PNode.children = [row];
                }
                toDo.push(row);
            }
        }
    }
    return nodes;
};
console.log(listToTree('ids', 'parentId', allList));
var lists = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
var convert = function (list) {
    var res = [];
    var map = list.reduce(function (p, v) {
        p[v.ids] = v;
        return p;
    }, {});
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        if (item.parentId === 0) {
            res.push(item);
        }
        if (Reflect.has(map, item.parentId)) {
            var parent_1 = map[item.parentId];
            parent_1.children = parent_1.children || [];
            parent_1.children.push(item);
        }
    }
    return res;
};
console.log(convert(lists));
var listToTree2 = function (myId, PId, list) {
    var result = [];
    var map = list.reduce(function (p, i) {
        p[i[myId]] = i;
        return p;
    }, {});
    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
        var item = list_2[_i];
        if (!item[PId]) {
            result.push(item);
        }
        if (Reflect.has(map, item[PId])) {
            var parent_2 = map[item[PId]];
            parent_2.children = parent_2.children || [];
            parent_2.children.push(item);
        }
    }
    return result;
};
console.log(listToTree2('ids', 'parentId', allList));
