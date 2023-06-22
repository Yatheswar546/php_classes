// Js Objects
const info = {
    name : "Yatheswar",
    age : 22,
    email : "yathe@gmail.com"
};

// console.log(info);

// console.log(info.name);
// console.log(info["email"]);

delete info.age; 

// Nested Objects
let fruit = {
    name : "apple",
    color : "red",
    shape : {
        shape1 : "circle",
        shape2 : "round"
    }
};

// console.log(fruit.shape.shape1);

// Object Methods

const name = {
    fname : "Yatheswar",
    lname : "Ethalapaka",
    fullName : function(){
        return this.fname + " " + this.lname
    }
};

// console.log(name.fullName());
// console.log(name.fullName("Yathe","Eswar"))

// Js Functions
function add1(a,b){

    c = a + b

    return c;
}
let res1 = add1(2,3);
// console.log(res1);

function add2(... inputs){

    sum = 0;
    for (let i in inputs)
    c += inputs[i];

    return c;
}

let res2 = add2(2,3,9,8,90,190);
// console.log(res2);

// DOM - SELECT HTML ELEMENTS
var a = document.getElementById('id');
// console.log(a);
// console.log(a.innerHTML);

// b = document.getElementById('id').innerHTML = "Hello Everyone";
// console.log(b);

var b = document.getElementsByTagName('h1');
// console.log(b);
// console.log(b[1].innerHTML)
// console.log(b.length)

var c = document.getElementsByClassName('class1');
// console.log(c)
// console.log(c[2].innerHTML)

// QuerySelectors
p = document.querySelector("#para");
// console.log(p)
p.style.fontSize = "50px";

nav = document.querySelectorAll('.navbar');
// console.log(nav);
// nav.forEach((element) => {
//     nav.style.fontSize = "10px"; 
// });

// Update HTML ELEMENTS
// 1) .innerHTML
x = document.getElementsByClassName("class2");
// console.log(x[0].innerHTML);
x[0].innerHTML = "Updated Element 1";

y = document.getElementById("class2");
// console.log(y);
y.innerHTML = "Updated Element 2";

// 2) element.attribute

image = document.getElementById('image');
// console.log(image.src)
image.src = "./images/bg2.jpg"

counter = document.getElementById('counter');
console.log(counter);
counter.style.fontSize = "30px";