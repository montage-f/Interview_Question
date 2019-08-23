/**
 * Created by MonTage_fz on 2019/7/31
 */

// 当 a等多少的时候, 下面的条件成立
// 因为隐式转换会调用toString方法, 所以我们需要重写toString方法
let a = {
    i: 1,
    toString(): string {
        return JSON.stringify(a.i++);
    }
};
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
