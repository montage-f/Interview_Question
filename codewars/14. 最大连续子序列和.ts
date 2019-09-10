/**
 * Created by MonTage_fz on 2019/9/9
 */
const maxSequence = (arr) => {
    let maxSum = arr[0];
    let sum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (sum < 0) {
            sum = arr[i];
        } else {
            sum += arr[i];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
