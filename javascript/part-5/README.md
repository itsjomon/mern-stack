## JS Object Literals

An object is a collection of key-value pairs (properties) where keys are strings (or Symbols) and values can be any data type, including other objects, arrays, or functions.

Objects are collection of properties

```js
const objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
```
## Object References and `const`

When you create an object, the variable stores a reference (memory address) to the object, not the object itself. `const` locks this reference, but the object's internal properties remain mutable.

```js
// Two variables can reference the same object
const obj1 = { name: "John" };
const obj2 = obj1;  // Both point to SAME object in memory

obj2.name = "Jane";

console.log(obj1.name);  // "Jane" (changed!)
console.log(obj1 === obj2);  // true (same reference)
```

```js
const person = { name: "Alice", age: 25 };

// CAN change internal properties
person.age = 26;           // Allowed
person.city = "NYC";       // Allowed
delete person.name;        // Allowed

// CANNOT change the reference
person = { name: "Bob" };  // TypeError!
person = null;             // TypeError!
person = {};               // TypeError!
```

## Math Object

**Properties:**

- `Math.PI` - 3.14159...
- `Math.E` - 2.718...

**Methods:**

- `Math.abs(n)` - Absolute value (removes negative sign)
- `Math.pow(a,b)` - a to the power of b
- `Math.floor(n)` - Round down
- `Math.ceil(n)` - Round up
- `Math.random()` - Random 0 to 1 (excludes 1)
- `Math.trunc(n)` - Removes decimals
