// Function Definition
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to GeeksforGeeks");
}

let nameVal = "User";

// calling the function
console.log(welcomeMsg(nameVal));
// Regular function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function version
const submission = (a, b) => {
  return a + b;
};

// Shorter (if only one expression)
const addition = (a, b) => a + b;
// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This runs immediately!");
})();
//callback function example
// A function that takes another function as an argument
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;

//nested function example
console.log(num(5, double));
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));
//pure function example
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));
//temprory dead zone
function gfg() {
    console.log(x); // ReferenceError
    let x = 3;
}
gfg();
//global variable example

let name = "John"; // Global variable

function sayHello() {
      console.log("Hello " + name);
}
//NESTED SCOPE OR VARIABLE
sayHello(); // Output: "Hello John"
function outer() {
    let name = "John"; // Outer function variable

    function inner() {
        console.log("Hello " + name);
    }

    inner(); // Output: "Hello John"
}

outer();
//block scope example
{
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Output: I am block scoped
}
//LOCAL SCOPE EXAMPLE
function sayHello() {
      let name = "John"; // Local variable
  
      console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"

console.log(name); 
// Output: Uncaught ReferenceError: name is not defined
//CLOSURE EXAMPLE
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
    }
    return inner;  
}
const closure = outer(); 
closure(); // Output: I'm in the outer scope!
//higher order function example
//map function  
const m = [1, 2, 3, 4, 5];
const square = m.map((num) => num * num);
console.log(square);
//filter function
const s = [1, 2, 3, 4, 5];
const even = s.filter((num) => num % 2 === 0);
console.log(even);
//reduce function
const r = [1, 2, 3, 4, 5];
const sum = r.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
//forEach function
const q = [1, 2, 3];
n.forEach((num) => console.log(num * 2));
//every function
const p = [1, 2, 3, 4, 5];
const allPos = p.every((num) => num > 0);
console.log(allPos)