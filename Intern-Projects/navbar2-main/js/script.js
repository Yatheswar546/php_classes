let menu_open =  document.querySelector('.navbar .menu_open');
let menu_close = document.querySelector('.navbar .menu_close');
let links = document.querySelector('.navbar .links');

//console.log(menu_open);
//console.log(menu_close);
//console.log(links);

//menu_open.addEventListener('click',function(){
   // console.log('It is working');
//});

menu_open.addEventListener('click', ()=> {
    links.classList.toggle('active');
    console.log(links.classList);
});

menu_close.addEventListener('click',()=>{
    links.classList.toggle('active');
    console.log(links.classList);
});


