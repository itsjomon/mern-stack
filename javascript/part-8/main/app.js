// ----- forEach -----
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

arr.forEach((el) => {
    console.log(el);
});


let students = [
    {
        name: "Jomon",
        marks: 95
    },
    {
        name: "Krisha",
        marks: 98
    },
    {
        name: "Nikku",
        marks: 97
    }
];

students.forEach((std) => {
    console.log(std);
});

students.forEach((std) => {
    console.log(std.marks);
});



// ----- map -----
let map = arr.map((el) => {
    return el * el;
});

// let map = arr.map((el) => {}); // (12) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
console.log(map);


let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);



// ----- filter -----
let filter = arr.filter((el) => {
    return el % 2 == 0; // even -> true, odd -> false
});

console.log(filter);



// ----- some -----
let some = arr.some((el) => {
    return el % 2 == 0;
});

console.log(some);




// ----- every -----
let every = arr.every((el) => {
    return el % 2 == 0;
});

console.log(every);



// ----- reduce -----
let reduce = arr.reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(reduce);

// Find maximum in an array
let nums = [11, 4, 7, 2, 5, 9, 12, 45, 3];

// let max = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//         max = nums[i];
//     }
// }
// console.log(max);

let max = nums.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);



// ----- Default Parameters -----
function sum(a, b = 2) {
    return a + b;
}

console.log(sum(3)); // 5


// function sum(a = 2, b) {
//     return a + b;
// }
// When you pass only one value 3, it goes to the first parameter a, overriding its default. The second parameter b gets nothing, so it remains undefined. Since 3 + undefined is not a valid number, you get NaN (Not a Number).



// ----- Spread -----
console.log(...arr);

let me = "Jomon";
console.log(...me);


// -- Spread with array literals --
let newArr = [...arr];
console.log(arr);
console.log(newArr);
newArr.push(13);
console.log(newArr);
console.log(arr);

let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let all = [...odd, ...even];
console.log(all);


// -- Spread with object literals --
const data = {
    email: "ironman@marvel.com",
    password: "iron-man-loves-iron-women"
};

const dataCopy = {...data, id: 123, country: "USA"};
console.log(dataCopy);


let obj = {...arr};
console.log(obj);

let obj2 = {...chars};
console.log(obj2);



// ----- Rest -----
function rest(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us: ", args[i]);
    }
}
rest(4);

function arg() {
    console.log(arguments);
    console.log(arguments[2]);
    console.log(arguments.length);
    // arguments.push(1); // its not an array so cant use array methods
}
arg(1, 2, 3, 5, 6)


function min(...args) {
    return args.reduce((min, el) => {
        if ( min < el) {
            return min;
        } else {
            return el;
        }
    });
}
console.log(min(2, 4, 6, 8, 1, 0, -2));


function example(name, age, ...otherArgs) {
    console.log(name);
    console.log(age);
    console.log(otherArgs);
}

example("John", 25, 1, 2, 3, 4, 5);



// ----- Destructuring -----
let names = ["tony", "bruce", "peter", "steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others);


// -- Destructuring Objects --
const person = {
    name: "krishna",
    age: 22,
    country: "india",
    id: 143,
}

let {name: username, age, state = "kerala", ...more} = person;
console.log(username);
console.log(age);
console.log(more);
console.log(state);

