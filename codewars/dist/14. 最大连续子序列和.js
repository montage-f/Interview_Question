/**
 * Created by MonTage_fz on 2019/9/9
 */
var maxSequence = function (arr) {
    var maxSum = arr[0];
    var sum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (sum < 0) {
            sum = arr[i];
        }
        else {
            sum += arr[i];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
