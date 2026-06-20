// Ans 1
let p1 = document.createElement("p");
p1.innerText = "Hey I'm red!";
document.querySelector("body").append(p1)

p1.style.color = "red";

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3)

h3.style.color = "blue";

let div = document.createElement("div")
let h1 = document.createElement("h1")
let p2 = document.createElement("p")

h1.innerText = "I'm in a div";
p2.innerText = "ME TOO!";

div.style.border = "1px solid black";
div.style.backgroundColor = "pink"


div.append(h1);
div.append(p2);
document.querySelector("body").append(div)



// Ans 2
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Clickme";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



// Ans 3
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");



// Ans 4
let btn = document.querySelector("#btn");
btn.style.color = "white";
btn.style.backgroundColor = "blue";



// Ans 5
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
heading.style.color = "purple";
document.querySelector("body").append(heading);



// Ans 6
let p3 = document.createElement("p");
p3.innerHTML = "@its<b>jomon</b>";
document.querySelector("body").append(p3);
