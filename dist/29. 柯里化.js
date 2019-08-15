/**
 * Created by MonTage_fz on 2019/8/14
 */
var addValue = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (a, b) { return a + b; });
};
console.log(addValue(1, 2));
var currying = function (fn) {
    var args = [];
    var result = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (!rest.length) {
            return fn.apply(void 0, args);
        }
        else {
            args.push.apply(args, rest);
            return result;
        }
    };
    return result;
};
var sum = currying(addValue);
sum(1, 2)(3, 4, 5);
console.log(sum());
