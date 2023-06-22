// add remove toggle
var heading = document.getElementById('heading')

console.log(heading.classList.add('big'))
// console.log(heading.classList.remove('small'))
console.log(heading.classList)

var btnShow = document.getElementById('btn-show');
var btnHide = document.getElementById('btn-hide')
var navbar = document.getElementById('navbar');

btnShow.addEventListener('click', function(){
    navbar.classList.add('show');
    navbar.classList.remove('hide');
});

btnHide.addEventListener('click', function(){
    navbar.classList.add('hide');
    navbar.classList.remove('show');
});
