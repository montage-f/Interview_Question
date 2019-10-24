/**
 * Created by MonTage_fz on 2019/10/24
 */
import {hasGroupsSizeX, hasGroupsSizeX_2} from '../02.卡牌分组';

test('卡牌分组', () => {
    expect(hasGroupsSizeX_2([4, 3, 2, 1, 1, 2, 3, 4])).toBe(true);
    expect(hasGroupsSizeX_2([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
    expect(hasGroupsSizeX_2([1])).toBe(false);
    expect(hasGroupsSizeX_2([1, 1])).toBe(true);
    expect(hasGroupsSizeX_2([1, 1, 1, 2, 2, 2])).toBe(true);
});
