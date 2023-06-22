var countDown = document.getElementById('countdown');
var bgImage = document.getElementById('bg-image');

// console.log(bgImage);
// console.log(countDown);

var initialCountdown = countDown.innerHTML
// console.log(initialCountdown);

// console.log(bgImage.src)
// bgImage.src = "./images/bg2.jpg"

var interval = setInterval(function(){

    initialCountdown = initialCountdown > 0 ? initialCountdown -=1 : 0
    // initialCountdown = initialCountdown-1;
    // console.log(initialCountdown);
    countDown.innerHTML = initialCountdown;

    // countDown.style.fontSize = initialCountdown * 100 + "px";

    // bgImage.style.width = initialCountdown * 10 + "%";

    var imagePath = initialCountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
    bgImage.src = imagePath;
    // console.log(bgImage)

    console.log('Interval in Runinng');

    if(initialCountdown <= 0){
        clearInterval(interval);
    }

},1000);