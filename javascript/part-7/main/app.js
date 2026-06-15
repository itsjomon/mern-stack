// ----- this Keyword -----
const student = {
    name: "Nick",
    age: 22,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this); // 'this' = student object (caller)
        let avg = (this.eng +  this.math + this.phy) / 3; // 'this' = student (the object calling getAvg)
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};
student.getAvg();


// ----- Regular Function -----
function getAvg() {
    // 'this' = global object (Window in browsers, global in Node.js)
    console.log(this); // Prints Window/global object
}
getAvg(); // Regular call -> 'this' is global object



// ----- try & catch -----
// // let a = 5;
// try {
//     console.log(a);
// } catch {
//     console.log("Caught an error... a is not defined");
// }

try {
    console.log(a);
} catch(err) {
    console.log("Caught an error... a is not defined");
    console.log(err);
}



// ----- Arrow function -----
const sum = (a, b) => {
    console.log(a + b);
};
sum(5, 6);

const cube = (n) => { // Parentheses around single parameter are optional
    return n * n * n;
};
console.log(cube(2));

const pow = (a, b) => {
    return a ** b;
};
console.log(pow(2, 4));

const hello = () => { // For no arguments, parentheses () are required
    console.log("Hello");
};
hello();


// Implicit return in arrow function
const mul = (a, b) => (a * b);
console.log(mul(2, 3));

const power = (a, b) => a ** b; // no parentheses, also correct
console.log(power(2, 2));



// ----- setTimeout -----
console.log("Hi there!");
setTimeout(() => {
    console.log("Hello World!");
}, 4000);
console.log("Welcome to");


// ----- setInterval -----
// setInterval(() => {
//     console.log("Hello JS!");
// }, 2000);

let id = setInterval(() => {
    console.log("Hello World!!!");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 4000);



// ----- this keyword with arrow function -----
// Arrow functions do NOT have their own this. They inherit this from their surrounding (parent) scope.
const std = {
    name: "krishna",
    mark: 95,
    prop: this, // global scope (window/global object)
    
    getName: function () { // Regular function -> 'this' = std object
        return this.name;
    },
    
    getMark: () => { // Arrow function -> 'this' = parent scope (global)
        return this.mark; // undefined (window.mark doesn't exist)
    },
    
    getInfo1: function() { // Regular function -> 'this' = std object
        setTimeout(() => { // Arrow function -> inherits 'this' from parent (std)
            console.log(this.name); // 'this' = std object

        }, 2000);
    },
    
    getInfo2: function () { // 'this' = std
    setTimeout(function() { // Regular creates its own 'this' -> window
        console.log(this.name) // 'this' = window
        }, 2000);
    }
}
console.log(std.getName());
console.log(std.getMark());
std.getInfo1();
std.getInfo2();
// console.log(getMark); // Arrow function -> 'this' = parent scope (global/window), so this.mark = undefined

// const x = 2; // global scope