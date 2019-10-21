/**
 * Created by MonTage_fz on 2019/9/11
 */
// 编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。（实例可能监听多个不同的事件，也可以去除监听事件）
class People {
    name: string;
    list: any[] = [];
    
    constructor(name) {
        this.name = name;
    }
    
    on(funName: string, fun: Function) {
        this.list.push({
            name: funName,
            fun
        });
    }
    
    emit(funName: string, content: string) {
        this.list.forEach(({name, fun}) => {
            if (funName === name) {
                fun(content);
            }
        });
    }
    
    off(funName: string, fu: Function) {
        this.list.forEach(({name, fun}, index) => {
            if (funName === name && fu.name === fun.name) {
                this.list.splice(index, 1);
            }
        });
    }
    
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
}


/* 以下为测试代码 */
const say1 = (greeting) => {
    console.log(`${greeting}, nice meeting you.`);
};

const say2 = (greeting) => {
    console.log(`${greeting}, nice meeting you, too.`);
};

const jerry = new People('Jerry');
jerry.sayHi();
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1);
jerry.on('greeting', say2);

jerry.emit('greeting', 'Hi');
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1);
jerry.emit('greeting', 'Hi');
// => 只输出：'Hi, nice meeting you, too'
