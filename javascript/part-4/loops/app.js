// ----- for loop -----
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}

for (let i = 20; i >= 15; i = i - 2) {
    console.log(i); // 20 18 16
}


// Print all odd numbers form 1 to 15
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i); // 1 3 5 7 9 11 13 15
}
// Backward odd numbers from 15 to 1
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i); // 15 13 11 9 7 5 3 1
}


// Print all even numbers form 2 to 10
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i); // 2 4 6 8 10
}
// Backward even numbers from 10 to 2
for (let i = 10; i >= 2; i = i - 2) {
    console.log(i); // 10 8 6 4 2
}


// Print the multiplication table for 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i); // 5 10 15 20 25 30 35 40 45 50
}


// Print the multiplication table input from user
let n = prompt("Enter a number to print its multiplication table:");
n = parseInt(n); // Converting string input to integer
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    for (let i = n; i <= n * 10; i = i + n) {
        console.log(i);
    }
}



// ----- Nested for loop -----
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 3; j ++) {
        console.log(j);
    }
}
// Output:
// Outer loop: 1
// 1
// 2
// 3
// Outer loop: 2
// 1
// 2
// 3
// Outer loop: 3
// 1
// 2
// 3



// ----- while loop -----
let i = 10;
while (i <= 15) {
    console.log(i); // 10 11 12 13 14 15
    i++;
}



// ----- break keyword -----
let j = 1;
while (j <= 5) {
    if (j == 3) {
        break;
    }
    console.log(j); // 1 2
    j++;
}



// ----- Loops with arrays -----
// Use loops to iterate through array elements one by one.

let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"]
fruits.push("Grapes");

// Normal order
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
// Output:
// 0 'Mango'
// 1 'Apple'
// 2 'Banana'
// 3 'Litchi'
// 4 'Orange'
// 5 'Grapes'

// Reverse order
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
// Output:
// 5 'Grapes'
// 4 'Orange'
// 3 'Litchi'
// 2 'Banana'
// 1 'Apple'
// 0 'Mango'



// ----- Nested Loops with Nested Arrays -----
let heroes = [
    ["Iron Man", "Spider-Man", "Thor"],
    ["Superman", "Batman", "Flash"]
];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(j, heroes[i][j]);
    }
}
// Output:
// List #0
// 0 'Iron Man'
// 1 'Spider-Man'
// 2 'Thor'
// List #1
// 0 'Superman'
// 1 'Batman'
// 2 'Flash'


let students = [
    ["Geo", 75],
    ["Sharon", 90],
    ["Riya", 83]
];

for (let i = 0; i < students.length; i++) {
    console.log(`Student Info #${i+1}`);
    for (let j = 0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
}
// Output:
// Student Info #1
// Geo
// 75
// Student Info #2
// Sharon
// 90
// Student Info #3
// Riya
// 83



// ----- for...of loop -----
let fruits2 = ["Mango", "Apple", "Banana", "Litchi", "Orange"];

for (let fruit of fruits2) {
    console.log(fruit);
}
// Output:
// Mango
// Apple
// Banana
// Litchi
// Orange


for (let char of "HelloWorld") {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o
// W
// o
// r
// l
// d


// Nested for...of loop
let heroes2 = [
    ["Iron Man", "Spider-Man", "Thor"],
    ["Superman", "Batman", "Flash"]
];

for (let list of heroes2) {
    for (let hero of list) {
        console.log(hero);
    }
}
// Output:
// Iron Man
// Spider-Man
// Thor
// Superman
// Batman
// Flash
