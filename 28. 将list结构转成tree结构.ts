/**
 * Created by MonTage_fz on 2019/8/6
 */


const listToTree = (myId, PId, list) => {
    const isPId = (PId, list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i][myId] === PId) {
                return true;
            }
        }
        return false;
    };
    // 最顶层的节点
    let nodes = [];
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        if (!isPId(item[PId], list)) {
            nodes.push(item);
        }
    }
    //
    let toDo = [];
    for (let i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
};
