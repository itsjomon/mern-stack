# JavaScript
JavaScript is a programming language used to make websites interactive. It runs in web browsers and allows developers to create dynamic features like buttons, animations, pop-ups, and real-time updates. JavaScript is essential for modern web development and works alongside HTML and CSS to build responsive and engaging websites.

## Using the Console
Uses REPL

Read-Evaluate-Print-Loop

## What is a Variable?
A variable is simply the name of a strong location.

<img src="" hight="150px" width="400px">

## Data Types in JS

| Primitive Types |
|-----------------|
| Numbers         |
| Boolean         |
| String          |
| Undefined       |
| Null            |
| BigInt          |
| Symbol          |

## Numbers in JS
- positive (14) & Negative (-4)
- Integers (45, -50)
- Floating numbers - with decimal (4.6, -8.9)

## Operations in JS

```js
a = 20
b = 10

//addition
sum = a + b

//subtraction
diff = a - b

//multiplication
prod = a * b

//division
div = a / b

//modulo
rem = a % b
```

- Modulo (reminder operator) `12 % 5 = 2`
- Exponentiation (power operation) `2**3 = 8`

## NaN in JS
The NaN global property is a value representing **Not-A-Number**.

```js
0/0

NaN - 1

NaN * 1

NaN + NaN
```

## Operator Precedence
This is the general order of soving an expression.

( )

**

*, /, %

+, -

## let keyword
Syntax of declaring variables.

```js
let age = 23;
age = age + 1;

let cgpa;
cgpa = 8.9

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
```

## const Keyword
values of constants can't be chnaged with re-assignment & they can't be re-declared.

```js
const year = 2025;
year = 2026; //Error
year = year + 1; //Error


const pi = 3.14;
const g = 9.8;
```

## var Keyword
Old Syntax of writing variables

```js
var age = 23;
var cgpa = 8.9;

var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
```

## Practice Qs

### Qs. What is the value of age after this code runs?

```js
let age = 23;
age + 2; //after 2 years
```

Ans: `23`

### Qs. What is the value of avg after the code runs?

```js
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
```

Ans: `90`

## Assignment operators

```js
age = age + 1;
age += 1;

age = age - 1;
age -= 1;

age = age * 1;
age *= 1;
```

## Unary operators

```js
age = age + 1;
age += 1;
age++ // increment

age = age - 1;
age -= 1;
age-- //decrement
```

- Pre-increment (Change, then use)

    ```js
    let age = 10;
    let newAge = ++age;
    ```

- Post-increment (use, then change)

    ```js
    let age = 10;
    let newAge = age++;
    ```

- Pre-decrement (Change, then use)

    ```js
    let age = 10;
    let newAge = --age;
    ```

- Post-decrement (use, then change)

    ```js
    let age = 10;
    let newAge = age--;
    ```

## Practice Qs

### Qs. What is the value of each variable in each line of code?

```js
let num = 5;
let newNum = num++;
newNum = ++num;
```
ans:
- 1st line `num = 5`
- 2nd line `newNum = 5`, `num = 6`
- 3rd line `newNum = 7`, `num = 7`

## Identifier Rules
All JavaScript variables must be identified with unique names (identifiers).

- Names can contain letters, digits, underscores, and dollar signs. (no space)
- Names must begin with a letter.
- Names can also begin with $ and _.
- Names are case sensitive (y and Y are different variables).
- reserved words (like javaScript keywords) CANNOT be used as names.

### camelCase
Way of Writing identifiers

camelCase (JS naming convention)

snake_case

Pascalcase

## Boolean in JS
Boolean represents a truth value -> true or false / yes or no

```js
let age = 23;
let isAdult = true;

let age = 13;
let isAdult = false;
```

## What is TypeScript
Static Typed, where JS is dynamic typed

Designed by Microsoft

## Practice Qs

### Qs. Find the errors in the following code?

a.
```js
let 1age = 5;
let 2age = 10;
```

b.
```js
let marks = 75;
let isPass = True;
```

c.
```js
let isPass = 'true';
```

ans: 

a.
```js
let age1 = 5;
let age2 = 10;
```

b.
```js
let marks = 75;
let isPass = true;
```
c.
```js
let isPass = true;

// let isPass = 'true'; it works, but '' and "" used for stings, if the isPass is a boolean variable then it must be let isPass = true;
```
## Strings in Js
Strings are text or sequence of characters

```js
let name = "Tony Stark";
let role = "IronMan";
let char = 'a';
let num ='23';
let empty = "";

let sentence = 'this is "apple"';
let sentence = "this is 'apple'";
```

### String Indices
JS is a 0 based indexing programming language

<img src="" hight="150px" width="400px">

### Concatenation
adding strings together

```js
"tony" + " " + "stark" = "tony stark"

"tony" + 1 = "tony1"
```

## null & undefined in JS

- **undefined**: A variable that has not been assigned a value is of type undefined

    ```js
    let a;
    //undefined

    a
    //undefined
    ```

- **null**: The null value represents the intentional absence of any object value.

    To be explicitly assigned.

    ```js
    let a = null;
    //undefined

    a
    //undefined
    ```

    ## Practice Qs

    ### Qs. Declare your name as a string and print its length in JS

    ans:

    ```js
    let name = "Jomon";

    name.length
    ```

    ### Qs. Declare your first name as a string and print its first character

    ans:

    ```js
    let firstName = "Jomon";

    firstName[0]
    ```


    ### Qs. Declare your first name as a string and print its last character

    ans:

    ```js
    let firstName = "jomon"
    undefined
    firstName.length
    5
    firstName[4]
    'n'
    firstName[firstName.length-1]
    'n'
    ```

    ### Qs. What is output of following code:
    
    ```js
    "abcd"+123
    ```

    ans:

    ```js
    'abcd123'
    ```

    ### Qs. What are lengths of an empty string & a string with a single space?

    ans:

    ```js
    let empty = ""
    undefined
    empty.length
    0
    
    let space = " "
    undefined
    space.length
    1
    ```