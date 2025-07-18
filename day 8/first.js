console.log("Hello, World!");
console.log("This is the first JavaScript file in the training program.");
fullName = "John Doe";
console.log("Full Name:", fullName);
age= 30;
console.log("Age:", age);
x= null;
console.log("Value of x:", x);
y= undefined;
console.log("Value of y:", y);
isFinite = true;
console.log("Is Finite:", isFinite);
let name = "Alice";
console.log("Name:", name);
// single line comment
/* multi-line comment
   This is a multi-line comment 
    that spans multiple lines */
// arithmetic operations
let a = 10;
let b = 5;
console.log("a:", a);
console.log("b:", b);
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
//unary operations
let c = 15;
console.log("c:", c);
console.log("Increment c:", ++c);
console.log("Decrement c:", --c);
//assignment operations
let d = 20;
console.log("d:", d);
d += 5;
console.log("d after += 5:", d);
d -= 3;
console.log("d after -= 3:", d);
d *= 2;
console.log("d after *= 2:", d);
d /= 4;
console.log("d after /= 4:", d);
d %= 3;
console.log("d after %= 3:", d);
d **= 2;    
console.log("d after **= 2:", d);
// comparison operations
let e = 25;
console.log("e:", e);
console.log("Is e equal to 25?", e === 25);
console.log("Is e not equal to 30?", e !== 30);
console.log("Is e greater than 20?", e > 20);
console.log("Is e less than or equal to 25?", e <= 25);
// logical operations
let f = true;
let g = false;
console.log("f:", f);
console.log("g:", g);
console.log("f AND g:", f && g);
console.log("f OR g:", f || g);
console.log("NOT f:", !f);
console.log("NOT g:", !g);
//conditional statements
let h = 10;
if (h > 5) {
    console.log("h is greater than 5");
}
 // if-else statement
else {
    console.log("h is not greater than 5");
}
//else if statement
if (h > 15) {
    console.log("h is greater than 15");
}
else if (h > 5) {
    console.log("h is greater than 5 but less than or equal to 15");
}
else {
    console.log("h is 5 or less");
}
//ternary operator
let i = 8;
let result = (i > 5) ? "i is greater than 5" : "i is 5 or less";
console.log(result);
alert("This is an alert message!"); //one time popup
prompt("Please enter your name:"); //input from user
let num = prompt("Enter a number:");
if (num % 2 === 0) {
    console.log(num + " is even.");
}else {
    console.log(num + " is odd.");
}
//loops
for (let j = 0; j < 5; j++) {
    console.log("For loop iteration:", j);
}
let k = 0;
while (k < 5) {
    console.log("While loop iteration:", k);
    k++;
}
do {
    console.log("Do-while loop iteration:", k);
    k++;
}while (k < 10);
//string operations
let str = "Hello, JavaScript!";
console.log(str.length); //length of string
console.log(str.toUpperCase()); //convert to uppercase
console.log(str.toLowerCase()); //convert to lowercase  
console.log(str.indexOf("JavaScript")); //find index of substring
console.log(str.slice(0, 5)); //extract substring
//special string 
let specialStr = `This is a string with a newline character
and a tab character.`;
console.log(specialStr); //print special string
console.log(`Full Name: ${fullName}, Age: ${age}`); //template literals
//escape characters
let escapedStr = "This is a string with a newline character\nand a tab character\tand a backslash \\.";
console.log(escapedStr); //print escaped string
//functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); //call function with argument
function add(x, y) {
    return x + y;
}
console.log("Sum of 5 and 10:", add(5, 10)); //call function with arguments
//arrow functions
let square = (x) => x * x;
console.log("Square of 4:", square(4)); //call arrow function



