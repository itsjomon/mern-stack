## DOM ( Document object Model)

The DOM is a programming interface for HTML documents. It represents the page as a tree structure where each node is an object representing a part of the document.

It allows us to manipulate/ change webpage content (HTML elements) dynamically.


## DOM Tree Structure

```text
                    +-------------+
                    |  document   |  <- Root node
                    +-------------+
                          |
                    +-----------+
                    |   html    |  <- Parent node
                    +-----------+
                    |           |
              +---------+  +---------+
              |  head   |  |  body   |  <- Child nodes
              +---------+  +---------+
               |    |       |    |    |
             title meta     h1   p   div  <- Leaf nodes
```

## Accessing DOM

```js
// Shows all properties and methods of document object
console.dir(document);
```

## Selecting Elements

- `getElementById` : Returns the element as an object or null (if not found)
- `getElementsByClassName` : Returns the elements as an HTML collection or empty collection (if not found)
- `getElementsByTagName` : Returns the elements as an HTML collection or empty collection (if not found)

## Query Selectors

Allows us to use any CSS selectors

```js
document.querySelector("p");        // Selects first p element
document.querySelector("#myID");    // Selects first element with id = myId
document.querySelector(".myClass"); // Selects first element with class = myClass

document.querySelectorAll("p");     // Selects all p elements
```

## Using Properties & Methods

- `innerText` : Shows only the visible text that appears on screen. Ignores hidden elements and formatting.
- `textContent` : Shows all text content including hidden elements. Gets everything without formatting.
- `innerHTML` : Shows the complete HTML markup including all tags and their content.

## Manipulating Attributes

- `obj.getAttribute("src")` : Gets value of specified attribute
- `obj.setAttribute("src", "img.jpg")` : Sets value of specified attribute

## Manipulating Style

- Style Property (`obj.style`) allows us to change the CSS styling of an element directly using JavaScript. It sets inline styles (applied directly to the HTML element).
- Using classList (`obj.classList`)
    - `classList.add()` to add a new classes
    - `classList.remove()` to remove classes
    - `classList.contains()` to check if class exists
    - `classList.toggle()` to toggle between add & remove

## Navigation

- `parentElement` : Gets parent element
- `children` : Gets all child elements
- `previousElementSibling` : Gets previous sibling element
- `nextElementSibling` : Gets next sibling element

## Adding Elements

- `document.createElement("p")` : Creates new element
- `parent.appendChild(child)` : Adds child at the end
- `parent.append(child)` : Adds child at the end
- `parent.prepend(child)` : Adds child at the beginning
- `insertAdjacentElement("beforeend", child)` : Inserts at specific position

## Removing Elements

- `parent.removeChild(child)` : Removes child from parent
- `element.remove()` : Removes element directly
