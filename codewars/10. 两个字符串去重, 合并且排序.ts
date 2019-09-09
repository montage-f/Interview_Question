/**
 * Created by MonTage_fz on 2019/9/9
 */
const longest = (s1: string, s2: string): string => {
    const str = `${s1}${s2}`;
    const list = str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return Array.from(new Set(list)).join('');
};
console.log(longest('abc', 'abc'));
