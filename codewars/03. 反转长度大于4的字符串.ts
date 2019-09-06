/**
 * Created by MonTage_fz on 2019/9/6
 */
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
    
    // 我的答案
const spinWords = (sentence) => {
        if (sentence.includes(' ')) {
            return sentence.split(' ')
            .map(v => {
                if (v.length >= 5) {
                    return v.split('').reverse().join('');
                }
                return v;
            }).join(' ');
        }
        return sentence.length >= 5 ? sentence.split('').reverse().join('') : sentence;
    };
console.log(spinWords('fell'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
console.log(spinWords('Just gniddik ereht is llits one more'));

// 别人的答案

const spinWords1 = (sentence) => {
    return sentence.split(' ').map((word) => {
        return word.length > 4 ? word.split('').reverse().join('') : word;
    }).join(' ');
};
console.log(spinWords1('fell'));
console.log(spinWords1('This is a test'));
console.log(spinWords1('This is another test'));
console.log(spinWords1('Just gniddik ereht is llits one more'));


const spinWords2 = (sentence) => sentence.replace(/\w{5,}/g, (w) => w.split('').reverse().join(''));


console.log(spinWords2('fell'));
console.log(spinWords2('This is a test'));
console.log(spinWords2('This is another test'));
console.log(spinWords2('Just gniddik ereht is llits one more'));
