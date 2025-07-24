// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());
// Abstraction example
function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }

    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person4 = new person('Mukul', 'Latiyan');
console.log(person4.firstname);
console.log(person4.getDetails_noaccess);
console.log(person4.getDetails_access());
// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        Address is: ${this.add}`);
    }
}

let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();
// Inheritance example
class person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());
// Create and initialize an array
let courses = ["HTML", "CSS", "JavaScript", "React"];

// Display the array items
console.log(courses);
 
// Create a new empty array
let newArray = [];
 
// forEach loop to push elements
// into new array
courses.forEach(function (course) {
    newArray.push(course);
});
 
// Display the new array of items
console.log(newArray);
// Create a Map by passing an Array of key-value pairs to the Map constructor
const arrayMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

// Accessing values in the Map
console.log(arrayMap.get('key1'));  // Output: "value1"
console.log(arrayMap.get('key2'));  // Output: "value2"
console.log(arrayMap.get('key3'));  // Output: "value3"
// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);