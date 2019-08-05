/**
 * Created by MonTage_fz on 2019/8/5
 */
const input: HTMLInputElement = document.querySelector('input');
const div: Element = document.querySelector('div');
input.addEventListener('compositionstart', function () {
    console.log('文字开始输入');
    div.innerHTML = this.value;
});
input.addEventListener('compositionupdate', function () {
    console.log('文字输入中');
    div.innerHTML = this.value;
});
input.addEventListener('compositionend', function () {
    console.log('文字输入结束');
    div.innerHTML = this.value;
});
