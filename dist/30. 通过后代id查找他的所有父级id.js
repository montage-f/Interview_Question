var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Created by Mon4Tage_fz on 2019/8/15
 */
var data = [{
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
var bfs = function (target, id) {
    var queue = target.slice();
    var _loop_1 = function () {
        var current = queue.shift();
        if (current.children) {
            queue.push.apply(queue, current.children.map(function (v) { return (__assign({}, v, { path: (current.path || current.id) + " - " + v.id })); }));
        }
        if (current.id === id) {
            return { value: current };
        }
    };
    while (queue.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
};
console.log(bfs(data, '111'));
// 栈循环. pop => push => pop => push
var dfs = function (target, id) {
    var queue = target.slice();
    var _loop_2 = function () {
        var current = queue.pop();
        if (current.children && current.children.length) {
            queue.push.apply(queue, current.children.map(function (item) { return (__assign({}, item, { path: (current.path || current.id) + "-" + item.id })); }));
        }
        if (current.id === id) {
            return { value: current };
        }
    };
    while (queue.length) {
        var state_2 = _loop_2();
        if (typeof state_2 === "object")
            return state_2.value;
    }
};
console.log(dfs(data, '122'));
