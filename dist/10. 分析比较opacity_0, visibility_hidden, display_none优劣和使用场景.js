/**
 * Created by MonTage_fz on 2019/7/29
 */
// opacity
var opacity = document.querySelector('.opacity');
opacity.addEventListener('click', function () {
    alert('opacity: 占用空间, 可以点击, 触发重绘, 性能较好');
});
// visibility
var visibility = document.querySelector('.visibility');
visibility.addEventListener('click', function () {
    alert('visibility:占用空间, 不能点击, 触发重绘, 性能较好');
});
// display
var display = document.querySelector('.display');
display.addEventListener('click', function () {
    alert('display:不占空间, 不能点击, 但是触发回流, 性能很差');
});
