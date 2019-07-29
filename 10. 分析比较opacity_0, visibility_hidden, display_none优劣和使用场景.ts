/**
 * Created by MonTage_fz on 2019/7/29
 */

// opacity
let opacity: Element = document.querySelector('.opacity');
opacity.addEventListener('click', () => {
    alert('opacity: 占用空间, 可以点击, 触发重绘, 性能较好');
});

// visibility
let visibility: Element = document.querySelector('.visibility');
visibility.addEventListener('click', () => {
    alert('visibility:占用空间, 不能点击, 触发重绘, 性能较好');
});

// display
let display: Element = document.querySelector('.display');
display.addEventListener('click', () => {
    alert('display:不占空间, 不能点击, 但是触发回流, 性能很差');
});
