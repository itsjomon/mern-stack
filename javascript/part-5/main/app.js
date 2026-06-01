// ----- JS Object Literal -----
const student = {
    name: "Ria",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student); // { name: 'Ria', age: 23, marks: 94.4, city: 'Delhi' }

const item = {
    price: 299,
    discount: 40,
    colors: ["Red", "Pink"]
};
console.log(item); // { price: 299, discount: 40, colors: [ 'Red', 'Pink' ] }



// Create an object literal for the properties of thread / twitter post which includes - username, content, likes, reposts, tags
const post = {
    username: "@tom",
    content: "Hello World!",
    likes: 701,
    reposts: 39,
    tags: ["openjdk", "java"]
};
console.log(post); // { username: '@tom', content: 'Hello World!', likes: 701, reposts: 39, tags: [ 'openjdk', 'java' ] }



// Get Values
console.log(post["username"]); // @tom
console.log(post.username); // @tom // preferred way - dot notation / dot operator

let prop = "reposts";
console.log(post[prop]); // 39
// post.prop; // Wrong // Dot notation works on object properties, not on standalone variables.



// Conversion in Get values
// JS automatically converts objects keys to strings. Even if we made the number as a key, the number will be converted to string.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj); // { '1': 'a', '2': 'b', true: 'c', null: 'd', undefined: 'e' }
console.log(obj[1]); // 'a'  // number 1 is converted to string '1'
console.log(obj[null]); // 'd'  // null is converted to string 'null' // No quotes because null, undefined, true, false, and numbers are not strings, they're primitive values that JavaScript automatically converts to strings inside [].
console.log(obj.null); // 'd'
// console.log(obj.1); // dot notation not allowed for numbers



// Add/Update Values
const student2 = {
    name: "Ria",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student2.city)
student2.city = "Mumbai"; // update
student2.gender = "Female"; // add
student2.marks = [99, 98 ,97]; // update marks to array
console.log(student2); // { name: 'Ria', age: 23, marks: [ 99, 98, 97 ], city: 'Mumbai', gender: 'Female' }



// To delete:
// delete objectName.KeyName; 
// delete student2.gender;



// Object of Objects / Nested Objects
const classInfo = {
    ria : {
        grade: "A+",
        city: "Delhi"
    },
    nick : {
        grade: "A",
        city: "Pune"
    },
    jack : {
        grade: "O",
        city: "Mumbai"
    }
};
console.log(classInfo); // { ria: { grade: 'A+', city: 'Delhi' }, nick: { grade: 'A', city: 'Pune' }, jack: { grade: 'O', city: 'Mumbai' } }
console.log(classInfo.jack); // { grade: 'O', city: 'Mumbai' }
console.log(classInfo.jack.grade); // O
classInfo.jack.city = "Chennai"; // update city
console.log(classInfo.jack); // { grade: 'O', city: 'Chennai' }



// Array of Objects
const classInfo2 = [
    { 
        name: "Ria",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Nick",
        grade: "A",
        city: "Pune"
    },
    {
        name: "Jack",
        grade: "O",
        city: "Mumbai"
    }
];
console.log(classInfo2); // (3) [ { name: 'Ria', grade: 'A+', city: 'Delhi' }, { name: 'Nick', grade: 'A', city: 'Pune' }, { name: 'Jack', grade: 'O', city: 'Mumbai' } ]
console.log(classInfo2[0]); // { name: 'Ria', grade: 'A+', city: 'Delhi' }
console.log(classInfo2[0].name); // Ria
classInfo2[0].city = "Chennai"; // update city
classInfo2[0].gender = "Female"
console.log(classInfo2[0]); // { name: 'Ria', grade: 'A+', city: 'Chennai', gender: 'Female' }



// Math Object

// Constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Rounding Methods
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.9)); // -5
console.log(Math.trunc(4.9)); // 4 // removes decimal part
console.log(Math.trunc(4.1)); // 4
console.log(Math.trunc(-4.9)); // -4

// Power and Square Root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(64)); // 8

// Min and Max
console.log(Math.min(5, 2, 9, 1, 7)); // 1
console.log(Math.max(5, 2, 9, 1, 7)); // 9

// Absolute Value
console.log(Math.abs(-7.8)); // 7.8

// Random Number
console.log(Math.random()); // random number between 0 and 1



// Random Integers
// From 1 to 10
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step4);

console.log(Math.floor(Math.random() * 10) + 1); // one liner
