console.log("Hello World!"); // Hello World
console.log(2 + 2); // 4
console.log(123); // 123
console.log("Sum = " , 22) // Sum = 22


// ----- String Concatenation -----
let pencil = 10;
let eraser = 5;
console.log("The total Price is", pencil + eraser, "rupees."); // The total Price is 15 rupees.


// ----- Template Literals -----
let a = 15;
let b = 20;
console.log(`Total ${a + b} rupees.`); // Total 35 rupees.

let c = 25;
let d = 30;
// let total = "Total price is : " + (c + d) + " rupees.";
let total = `The price is : ${c + d} rupees.`;
console.log(total);  // The price is : 55 rupees.


// ----- Operators: -----

// Arithmetic
let e = 3;
let f = 4;
console.log(e+f); // 7
console.log(e-f); // -1
console.log(e*f); // 12
console.log(e/f); // 0.75
console.log(e%f); // 3
console.log(e**f); // 81

// Unary
console.log(e++); // 3
console.log(++e); // 5

// Assignment
let g = 13;
let h = 14;
h = g;
console.log(h); // 13

// Comparison
let age = 10;
let age2 = "10";
console.log(age > 18); // false
console.log(age < 18); // true
console.log(age >= 10); // true
console.log(age <= 10); // true
console.log(age == 18); // false
console.log(age != 18); // true

console.log(age == age2); // true // compares value, not type
console.log(age === age2); // false // compares value & type
console.log(age !== age2); // true // compares value & type

// Comparison for Non-numbers
console.log('a' > 'A'); // true
console.log('*' < '&'); // false


// ----- Conditional Statement -----

// if Statement
console.log("Before if statement"); // Before if statement
let age3 = 13;
if(age3 >= 18) {
    console.log("You can vote");
    let a = 5;
    console.log(5 * a);
}
if(age3 < 18) {
    console.log("You cannot vote"); // You cannot vote
}
console.log("After if statement"); // After if statement

let firstName = "Jomon"
if (firstName === "Jomon") {
    console.log(`Welcome ${firstName}`); // Welcome Jomon
}


// if-else Statement
let age4 = 17;
if(age4 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote"); // You cannot vote
}


// else-if Statement
let mark = 75;
if (mark >= 85) {
    console.log("A+");
} else if (mark >= 75) {
    console.log("A"); // A
} else if (mark >= 65) {
    console.log("B+");
} else if (mark < 55) {
    console.log("B");
}

let month = "january";
if (month === "january") {
    console.log("Winter is here"); // Winter is here
} else if (month === "april") {
    console.log("Summer is here");
}  else {
    console.log("Blah blah blah")
}


// Nested if-else Statement
let mark2 = "60";
if (mark2 >= 33) {
    console.log("Pass") // Pass
    if (mark2 >= 80) {
        console.log("Grade: O");
    } else{
        console.log("Grade: A"); // Grade: A
    }
} else {
    console.log("Better luck next time");
}


// switch Statement
let clr = "red";

switch (clr) {
    case "red" :
        console.log ("Stop"); // Stop
        break;
    case "yellow" :
        console.log ("Slow Down");
        break;
    case "green" :
        console.log ("Go");
        break;
    default :
        console.log ("Broken Light");
}


// ----- Logical Operators -----
let score = 80;
if (score >= 33 && score >= 80) {
    console.log("Pass"); // Pass
    console.log("A+"); // A+
}

if (score >= 33 || score === 80) {
    console.log("Pass"); // Pass
}

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in");  // Please log in
} else {
  console.log("Welcome back!");
}


// ----- truthy and falsy -----
if (0) {
    console.log("It has true value");
} else {
    console.log("It has false value"); // It has false value
}

let string = "";
if (string) {
    console.log("String is not empty");
} else {
    console.log("String is empty"); // String is empty
}

let num = -10;
if (num) {
    console.log("Num is not equal to 0"); // Num is not equal to 0
} else {
    console.log("Num is equal to 0");
}



// ----- Alerts & Prompts -----
let fName = prompt("Enter first name: ");
let lName = prompt("Enter last name: ");
let msg = `Welcome ${fName + ' ' + lName}`;
console.log(msg); // Welcome fName lName
alert(msg);

console.log("This is a simple log");
console.error("This is an error msg");
console.warn("This is a warning msg");