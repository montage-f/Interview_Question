/**
 * Created by MonTage_fz on 2019/7/29
 */
// 观察者模式
// 一个对象(被观察者)的状态发生改变时, 汇通站所有依赖他的对象(观察者), 这两者是直接关联的
// 举个栗子:
// 当我们去一个饭店吃饭, 然后叫了一个号, 过了一会儿, 饭店喇叭响起, 100号进来吃饭,
// 这个时候外面等待的客户, 都去看自己手上地那个号码牌, 这就是观察者模式
// 饭店喇叭是发布者, 我们是观察者, 我们时刻观察着喇叭喊的号码.
interface ISubject {
    observers: Array<any>
    
    add(item): void
    
    notify(): void
}

class Subject implements ISubject {
    observers = [];
    
    constructor() {
    }
    
    // 添加订阅者
    add(item) {
        this.observers.push(item);
    }
    
    // 通知订阅者
    notify() {
        this.observers.forEach(item => {
            if (typeof item === 'function') {
                item();
            }
        });
    }
    
}

const subject = new Subject();

const man_1 = () => console.log('我是订阅者man_1');
const man_2 = () => console.log('我是订阅者man_2');

subject.add(man_1);
subject.add(man_2);
subject.notify();


// 发布-订阅模式
// 消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。
// 而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。
// 同样的，订阅者可以表达对一个或多个类别的兴趣，
// 只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。

// 举个栗子:
// 你去想去电影院看一个电影, 但是这个时候, 电影还没上映, 然后你就去app (subject)定了一个提醒通知,
// 等你想看的电影上线了之后, app就会自提醒你, 让你去观看.

interface IMovie {
    subject: object
    
    look(type: string, info: any): void
    
    notify(type: string): void
}

class Movie implements IMovie {
    // 保存订阅的信息
    subject = {};
    
    // 订阅的类型和信息
    look(type, info) {
        if (!this.subject[type]) {
            this.subject[type] = [];
        }
        this.subject[type].push(info);
    }
    
    // 发布什么类型
    notify(type) {
        this.subject[type].forEach((item, index) => {
            if (typeof item === 'function') {
                item(type, index + 1);
            }
        });
    }
}

const movie = new Movie();
movie.look('哪吒', (type: string, index: number) => console.log(`我是第${index}个看${type}的人`));
movie.look('哪吒', (type: string, index: number) => console.log(`我是第${index}个看${type}的人`));
movie.look('哪吒', (type: string, index: number) => console.log(`我是第${index}个看${type}的人`));
movie.look('西游记', (type: string, index: number) => console.log(`我是第${index}个看${type}的人`));

movie.notify('哪吒');
movie.notify('西游记');
