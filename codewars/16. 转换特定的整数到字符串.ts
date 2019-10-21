/**
 * Created by MonTage_fz on 2019/9/11
 */
// 1 => A
// 2 => B
// 3 => C
// ...
// 26 => Z
// 27 => AA
// 28 => AB
// 29 => AC
// ...
// 52 => AZ
// 53 => BA


const convert = (num: number): string => {
    let result = [];
    while (num) {
        let t = num % 26;
        if (!t) {
            t = 26;
            --num;
        }
        result.push(String.fromCodePoint(t + 64));
        num = ~~(num / 26);
    }
    return result.reverse().join('');
};

console.log(convert(52));
