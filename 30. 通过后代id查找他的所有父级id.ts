/**
 * Created by Mon4Tage_fz on 2019/8/15
 */
const data = [{
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
// 列队循环. push => shift => push => shift
const bfs = (target, id) => {
    const queue = [...target];
    while (queue.length) {
        let current = queue.shift();
        if (current.children) {
            queue.push(...current.children.map(v => ({...v, path: `${(current.path || current.id)} - ${v.id}`})));
        }
        if (current.id === id) {
            return current;
        }
    }
};

console.log(bfs(data, '111'));
// 栈循环. pop => push => pop => push
const dfs = (target, id) => {
    const queue = [...target];
    while (queue.length) {
        let current = queue.pop();
        if (current.children && current.children.length) {
            queue.push(...current.children.map(item => ({...item, path: `${current.path || current.id}-${item.id}`})));
        }
        if (current.id === id) {
            return current;
        }
    }
};

console.log(dfs(data, '122'));
