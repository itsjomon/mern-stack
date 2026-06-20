// Ans 1
let nums = [10, 20, 30, 40, 50];

let ans1 = nums.every((el) => {
    return el % 10 == 0;
});

console.log(ans1);



// Ans 2
function getMin() {
    let min = nums.reduce((min, el) => {
        if ( min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

console.log(getMin(nums));



// Ans 3
let square = nums.map((el) => el * el);
console.log(square);

let sum = nums.reduce((sum, el) => sum + el);
console.log(sum);

let avg = sum / nums.length;
console.log(avg);



// Ans 4
console.log(nums.map((num) => num + 5));



// Ans 5
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));



// Ans 6
const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((arg) => arg * 2)];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));



// Ans 7
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));