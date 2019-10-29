/**
 * Created by MonTage_fz on 2019/10/29
 */
import {canPlaceFlowers, canPlaceFlowers_2} from '../03.种花问题';

test('种花问题', () => {
    expect(canPlaceFlowers([1, 0, 1, 0, 0], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlaceFlowers([0], 1)).toBe(true);
    expect(canPlaceFlowers_2([1, 0, 1, 0, 0], 1)).toBe(true);
    expect(canPlaceFlowers_2([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlaceFlowers_2([0], 1)).toBe(true);
});
