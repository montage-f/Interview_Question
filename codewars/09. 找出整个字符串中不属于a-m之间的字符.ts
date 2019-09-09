/**
 * Created by MonTage_fz on 2019/9/9
 */
const printerError = (str: string): string => {
    const lenght = str.length;
    // ^ 在中括号里面表示非, 在中括号外面表示以...开头
    const reg = /[^a-m]/ig;
    const count = str.match(reg) && str.match(reg).length;
    
    return `${count || 0}/${lenght}`;
};
console.log(printerError(''));
