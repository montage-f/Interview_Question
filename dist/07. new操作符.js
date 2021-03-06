/**
 * Created by montage_fz on 2019-07-28
 */
// 在使用new 关键字调用函数的时候, 发生了一下四件事情
// 1. 立即执行这个函数
// 2. 创建了一个新的对象
// 3. 函数的上下this, 文指向了这个对象
// 4. 如果构造函数内部返回的是一个非基本类型值, 那就就返回这个值, 否则返回创建的新对象
// Object.create() 创建一个对象的原型对象
function _New(fn) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    // 创建fn函数的原型对象的原型对象
    // console.log(obj.prototype === fn.prototype.prototype);  // true
    var obj = Object.create(fn.prototype);
    var result = fn.apply(obj, rest);
    // 如果函数返回的是对象类型, 则返回这个对象类型, 否则就返回生成的那个对象
    return result instanceof Object ? result : obj;
}
var Student = function (name, age) {
    this.name = name;
    this.age = age;
};
Student.prototype.sayHello = function () {
    console.log("\u4F60\u597D, \u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81 ");
};
var student = _New(Student, '小明', 12);
console.log(student.__proto__ === Student.prototype);
console.log(student);
student.sayHello();
