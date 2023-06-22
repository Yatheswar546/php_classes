// Js Outputs
/*  
    1) console.log
    2) alert()
    3) document.write()
    4) .innerHTML
*/

console.log("Hello World");
// alert("Hello Everyone");
// document.write(5+8)
document.getElementById("output").innerHTML = "Welcome to Js";

// Js Indentifiers
/*
    1) A-Z, a-z
    2) $
    3) _
    4) It can contain numbers but shouldn't start with numbers

*/

// Js Variables
/*
    1) var
    2) let
    3) const
*/

var num = 1;
var num = 2;

let num1 = 1;
num1 = 2;

const pi = 3.14;


// Js Scope of a variable
/*
    1) Functional/ Global
    2) Block Scope
*/


let n = 10
console.log(n)
{
    let n = 11
    console.log(n)
}
console.log(n)

// Js Operators
/* 
    1) Airthmetic - (+, -, *, / , % , **)
    2) Assignment - (=, +=, -=, *=, /=, %= , **=)
    3) Comparison - (< , > , ==, <=, >=, !=, ===, !==, ?)
    4) Logical - (&&, ||, !)
    5) Bitwise - (&, |, ~, ^, <<, >>, >>>)
    6) Typeof - (typeof, instanceof)
    7) Ternary Operator (? :)
*/

n1 = 5
n2 = 4
console.log(n1 + n2)

x1 = 5
x2 = "30"

if ((x1 < 10) || (x2 < 20)) {
    console.log("Yes")
}
else {
    console.log("No")
}

console.log(!(x1 < 10))

console.log(12 >> 1)

console.log(typeof (x2))

if (n1 != 5) {
    console.log("Yes")
}
else {
    console.log("No")
}

(n1 != 5) ? console.log("Yes") : console.log("No")

// Js Data Types
/*
    1) String
    2) Number
    3) BigInt
    4) Boolean 
    5) Undefined
    6) NULL
    7) Object 
        An Onject
        An Array
        A Date
*/

var x;
var y = null;
console.log(x);
console.log(y)

// Exponential Notation
num1 = 123e5         //12300000
num2 = 123e-5        //0.00123


// Hoisting
h = "hello"
var h

// Type Conversion
/*
    1) Implicit
    2) Explicit
*/

res1 = 51 + 90;
console.log(res1)

res2 = "Hello " + "Everyone";
console.log(res2)

res3 = 52 + 12 + "Hello";
console.log(typeof (res3))

res4 = 52 + 12 + "Hello" + 43 + 90;
console.log(res4)


// Conditional Statements
/*
    1) if
    2) else
    3) elseif
    4) switch
*/

switch (19) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

    default:
        day = "No Day";
}

console.log(day)

// Loops
/* 
    1) for
    2) for in
    3) for of
    4) while
    5) do-while
*/

for (i=0; i<10; i++){
    // console.log(i)
}

a1 = ["a","b","c","d","e"]
for(let x in a1){
    console.log(x);
}

a1 = ["a","b","c","d","e"]
for(let x of a1){
    console.log(x);
}

res = 0
while(res<10){
    res+=1
    console.log(res)
}

ans = 10
do{
    console.log(ans)
    ans -=1
}while(ans>0)
