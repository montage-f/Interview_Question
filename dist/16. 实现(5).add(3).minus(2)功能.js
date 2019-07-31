// 直接写在原型上
var add = function (i) {
    return this + i;
};
var minus = function (i) {
    return this - i;
};
// Object.assign(target, source) 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回 目标对象
Object.assign(Number.prototype, { add: add, minus: minus });
var num = 2;
console.log(num.add(1).minus(4));
