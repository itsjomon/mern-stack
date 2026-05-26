// ----- Ans 1 -----
console.log('Ans 1:');

// let color = "yellow";
// if (color === 'red') {
//     console.log('Stop!');
// } else if (color === 'yellow') {
//     console.log('Slow');
// } else if (color === 'green') {
//     console.log('Go');
// } else {
//     console.log('Broken Light');
// }

let color = "yellow";
switch (color) {
    case "red" :
        console.log ("Stop");
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


// ----- Ans 2 -----
console.log('Ans 2:');

let size = "S";
if (size === "XL") {
    console.log("Price is 250rs");
} else if (size === "L") {
    console.log("Price is 200rs");
} else if (size === "M") {
    console.log("Price is 100rs");
} else {
    console.log("Price is 50rs");
}


// ----- Ans 3 -----
console.log('Ans 3:');

let str = "apple";
if ((str[0] === 'a') && (str.length > 3)) {
    console.log("Good string");
} else {
    console.log("Not a good string");
}


// ----- Ans 5 -----
console.log('Ans 5:');

let day = 5;
switch (day) {
    case 1 :
        console.log ("Monday");
        break;
    case 2 :
        console.log ("Tuesday");
        break;
    case 3 :
        console.log ("Wednesday");
        break;
    case 4 :
        console.log ("Thursday");
        break;
    case 5 :
        console.log ("Friday");
        break;
    case 6 :
        console.log ("Saturday");
        break;
    case 7 :
        console.log ("Sunday, fun day");
        break;
    default :
        console.log ("Bad day");
}


// ----- Ans 6 -----
console.log('Ans 6:');

let num = 20;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}


// ----- Ans 7 -----
let name = prompt("Enter your name");
let age = prompt("Enter your age");

alert(`${name} is ${age} years old`);


// ----- Ans 8 -----
console.log('Ans 8:');

let quarter = 2;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default :
        console.log("NOT A QUARTER!");
}


// ----- Ans 9 -----
console.log('Ans 9:');

let str2 = "Airplane!";
if ((str2[0] === 'A' || str2[0] === 'a') && (str2.length > 5)) {
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}


// ----- Ans 10 -----
console.log('Ans 10:');

let a = 20;
let b = 14;
let c = 62;
if (a > b) {
    if (a > c) {
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest")
    }
} else {
    if (b > c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest")
    }
}


// ----- Ans 11 -----
console.log('Ans 11:');

let d = 33;
let e = 9343;
if ((d % 10) === (e % 10)) {
    console.log("Numbers have the same last digit which is", d % 10);
} else {
    console.log("Numbers don't have the same last digit");
}
