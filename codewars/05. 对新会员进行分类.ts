/**
 * Created by MonTage_fz on 2019/9/6
 */

// 将年龄大于55岁的, 且 人的差数大于7的, 评为高级会员, 其他的为普通会员[年龄, 人数差]
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]  =>  ["Open", "Open", "Senior", "Open", "Open", "Senior"]
    
    // 我的代码
const openOrSenior = (data: any[][]): string[] => {
        return data.map((item) => {
            let result = [item[0] >= 55, item[1] > 7];
            if (result.every((v) => v === true)) {
                return 'Senior';
            }
            return 'Open';
        });
    };
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]));
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));

// 别人的代码
const openOrSenior1 = (data: any[][]): string[] => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');


console.log(openOrSenior1([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
console.log(openOrSenior1([[45, 12], [55, 21], [19, -2], [104, 20]]));
console.log(openOrSenior1([[3, 12], [55, 1], [91, -2], [54, 23]]));
console.log(openOrSenior1([[59, 12], [55, -1], [12, -2], [12, 12]]));
