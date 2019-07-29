/**
 * Created by MonTage_fz on 2019/7/29
 */
    // Object.prototype.toString()
    // 每一个继承Object的对象都要一个toString,
    // 但是除了Object类型的对象外, 其他类型会直接使用toString方法时, 返回的都是内容字符串,
    // 所以我们需要使用call, 或者apply, 来改变toString方法的上下文,
    // 该方法可以用来判断任何数据类型

const isType = (info: any, type: string): boolean => {
        let map = new Map([
            ['array', '[object Array]'],
            ['object', '[object Object]'],
            ['symbol', '[object Symbol]'],
            ['function', '[object Function]'],
            ['boolean', '[object Boolean]'],
            ['number', '[object Number]'],
            ['string', '[object String]'],
            ['null', '[object Null]'],
            ['undefined', '[object Undefined]'],
        ]);
        
        return Object.prototype.toString.call(info) === map.get(type);
    };
console.log(isType(null, 'null'));


// instanceof 是用来判断当前对象是不是这个对象的实例
class Teacher {
    constructor() {
    
    }
}

let teacher = new Teacher();
console.log(teacher instanceof Teacher);
// instanceof 也可以用来判断是否为内置对象的实例,
// 但是所有的对象 instanceof Object 返回的都是true
console.log([] instanceof Array);
console.log([] instanceof Object);

// Array.isArray() 是es5新增的方法, 当不存在Array.isArray()的时候,
// 可以使用Object.prototype.toString.call([])===[object Array] 来代替

