/**
 * Created by MonTage_fz on 2019/10/21
 */
import {reverseWord1, reverseWord2} from '../01.反转字符串中的单词';

test('反转字符串中的单词', () => {
    expect(reverseWord1('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc');
    expect(reverseWord2('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc');
});
