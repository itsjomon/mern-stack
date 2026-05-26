// ----- Ans 1 -----
console.log('Ans 1:');

let msg = "Help!";
// let newMsg = msg.toUpperCase().trim();
// console.log(newMsg);
console.log(msg.trim().toLocaleUpperCase()); // "HELP!"


// ----- Ans 2 -----
console.log('Ans 2:');

let name = "JavaScript";
console.log(name.slice(4, 10)); // Script
console.log(name.indexOf("va")); // 2
console.log(name.replace("Java", "Type")); // TypeScript
console.log(name.slice(5).replace("pt", "sp")); // crisp


// ----- Ans 3 -----
console.log('Ans 3:');

let months = ["January", "July", "March", "August"];
months.shift();
months.shift();
months.unshift("June");
months.unshift("July");
console.log(months); // (4) ['July', 'June', 'March', 'August']


// ----- Ans 4 -----
console.log('Ans 4:');

months.splice(0, 2, "July", "June");
console.log(months); // (4) ['July', 'June', 'March', 'August']


// ----- Ans 5 -----
console.log('Ans 5:');

let lang = ["C", "CPP", "HTML", "JavaScript", "Python", "Java", "C#", "SQL"];
console.log(lang.reverse().indexOf("JavaScript")); // 4


// ----- Ans 6 -----
console.log('Ans 6:');

let game = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
console.log(game);

// Sub Qn. Change the first null (at row 0, column 1) to "O"
// game[0][1] = "O";
// console.log(game);


// ----- Ans 7 -----
console.log('Ans 7:');

let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n)); // (3) [7, 9, 0]


// ----- Ans 8 -----
console.log('Ans 8:');

let m = 3;
console.log(arr.slice(-m)); // [9, 0, -2] // (-m means, length - m = 4 - 3 = 1, so it starts from index 1)


// ----- Ans 9 -----
console.log('Ans 9:');

let str = prompt("Enter a string:");
if (str.length == 0) {
    console.log("Empty string");
} else {
    console.log("String is not empty");
}


// ----- Ans 10 -----
console.log('Ans 10:');

let str2 = "Itsjomon";
let idx = 3;
let char = str2[idx];

if (char >= 'a' && char <= 'z') {
    console.log("Character is lowercase");
} else {
    console.log("Character is not lowercase");
}


// ----- Ans 11 -----
console.log('Ans 11:');

let str3 = prompt("Enter a string 2:");
console.log(`Original string: ${str3}`);
console.log(`String without spaces: ${str3.trim()}`);


// ----- Ans 12 -----
console.log('Ans 12:');

let arr2 = ["hello", "hi", 1, 2, 3, 5, 65, -1, -90];
let item = -90;
if (arr2.indexOf(item) !== -1) {
    console.log("Item found");
} else {
    console.log("Item not found");
}
