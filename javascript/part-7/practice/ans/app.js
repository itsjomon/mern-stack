// Ans 1
const square = n => n * n;
console.log(square(2));



// Ans 2
let count = 0;
let id = setInterval(() => {
    count++;
    console.log("Hello JS!");
    
    if (count === 5) {
        clearInterval(id);
    }
}, 1000);



// Ans 3
const arrayAverage = (arr) => {
    let total = 0;
    for(let num of arr) {
        total += num;
    }
    
    return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));



// Ans 4
let num = 4;

const isEven = (num) => num % 2 == 0;

console.log(isEven(num));