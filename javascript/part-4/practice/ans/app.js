// ----- Ans 1 -----
console.log('Ans 1:');

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// Method 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr); // [1, 3, 4, 5, 6, 3]

// Method 2
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

arr = arr.filter(item => item !== num);
console.log(arr); // [1, 3, 4, 5, 6, 3]



// ----- Ans 2 -----
console.log('Ans 2:');

let number = 287152;
let count = 0;
let temp = number;
while(temp > 0) {
    count++;
    temp = Math.floor(temp/10);
}
console.log(count); // 6



// ----- Ans 3 -----
console.log('Ans 3:');

let number2 = 234728;
let sum = 0;
let temp2 = number2;
while(temp2 > 0) {
    let digit = temp2 % 10;
    sum += digit;
    temp2 = Math.floor(temp2/10);
}
console.log(sum); // 26



// ----- Ans 4 -----
console.log('Ans 4:');

let n = 5;
let factorial = 1;
for(let i = 2; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`); // Factorial of 5 is 120


// ----- Ans 5 -----
console.log('Ans 5:');

let arr2 = [2,5,10,4,2,7,1,9];

// method 1
// let largest = arr2[0];
// for(let i = 1; i < arr2.length; i++) {
//     if(largest < arr2[i]) {
//         largest = arr2[i];
//     }
// }
// console.log(largest); // 10

// Method 2
let largest = Math.max(...arr2);
console.log(largest); // 10
