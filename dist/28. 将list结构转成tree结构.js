/**
 * Created by MonTage_fz on 2019/8/6
 */
var listToTree = function (myId, PId, list) {
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
        if (!isPId(item[PId], list)) {
            nodes.push(item);
        }
    }
    //
    var toDo = [];
    for (var i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
};
