var btn = document.getElementById('btn');
var body = document.getElementById('body');
var element = document.getElementById('element')
var btn_increase = document.getElementById('btn-increase');

// console.log(body)
// console.log(element);

// btn.onclick = function(){
//     alert("Hello")
// }

btn.addEventListener('click', function() {
    // alert("This is addEventListener");

    var randomNum1 = Math.floor(Math.random() * 255);
    var randomNum2 = Math.floor(Math.random() * 255);
    var randomNum3 = Math.floor(Math.random() * 255);

    // alert("rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")");

    const rgbValue = "rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")";
    // console.log(rgbValue);

    body.style.backgroundColor = rgbValue;
});


var initialSize = window.getComputedStyle(element).fontSize;
// var initialSize = "2009px"

initialSize = parseInt(initialSize.substring(0, (initialSize.length - 2)));
// console.log(typeof(initialSize))
// console.log(initialSize);

btn_increase.addEventListener('click', function() {
    initialSize += 10
    element.style.fontSize = initialSize + "px";
});

