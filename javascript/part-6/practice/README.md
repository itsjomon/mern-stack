# Practice Questions

## Qn 1.

Create a function that prints a poem.

## Qn 2.

Create a function to roll a dice & always display the value of the dice (1 to 6).

## Qn 3.

Create a function that gives us the average of 3 numbers.

## Qn 4.

Create a function that prints the multiplication table of a number.

## Qn 5.

Create a function that returns the sum of numbers from 1 to n.

## Qn 6.

Create a function that returns the concatenation of all strings in an array.

## Qn 7.

What will be the output?

```js
let greet = "hello";

function outerGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
outerGreet();

/*
Output:
hello
namaste
*/

// The output shows hello then namaste. The innerGreet() is defined but never called, so it doesn't print anything. That's correct.
```

## Qn 8.

Write a JavaScript function that returns array elements larger than a number.

## Qn 9.

Write a JavaScript function to extract unique characters from a string.

Example: str = "abcdabcdefgggh" ans = "abcdefgh"

## Qn 10.

Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
    
Example: country = ["Australia","Germany","United States of America"]
    
Output: "United States of America"

## Qn 11.

Write a JavaScript function to count the number of vowels in a string argument.

## Qn 12.

Write a JavaScript function to generate a random number within a range (start, end).
