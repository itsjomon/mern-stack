// ----- getElementById ------
console.dir(document.getElementById("mainImg"));

const img = document.getElementById("mainImg");
console.log(img.src);
console.log(img.tagName);
console.log(img.id);

img.src = "assets/creation_1.png";

console.dir(document.getElementById("description"));

console.dir(document.getElementById("abc")); // null



// ----- getElementsByClassName -----
console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[0]);

let smallImages = document.getElementsByClassName("oldImg");

for  (let i = 0; i < smallImages.length; i++) {
    // console.dir(smallImages[i]);
    // console.dir(smallImages[i].src);

    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of img # ${i} Changed.`);
}

console.dir(document.getElementsByClassName("hello")); // empty HTMLCollection




// ----- getElementsByTagName -----
console.dir(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("p")[1]);
console.dir(document.getElementsByTagName("span")); // empty HTMLCollection



// ----- querySelector -----
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll("p"));



// ----- Using Properties & Methods -----
const para = document.querySelector("p");

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

// para.innerText = "Spider-Man is a Marvel superhero created by Stan Lee and Steve Ditko.";

para.innerHTML = "<u>Spider-Man</u> is a Marvel superhero created by Stan Lee and Steve Ditko.";

const heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerHTML}</u>`;



// ----- Getters and Setters -----
let img2 = document.querySelector("img");

console.dir(img2.getAttribute("id"));

img2.setAttribute("id", "spiderman");
console.dir(img2.getAttribute("id"));



// ----- Manipulating Style -----
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
img2.style.width = "40%";


let links = document.querySelectorAll(".box a");
// for  (let i = 0; i < links.length; i++) {
//     links[i].style.backgroundColor = "pink";
// }
for (link of links) {
    link.style.backgroundColor = "pink"; // inline style
}


const box = document.querySelector(".box");
console.dir(box.style);  // Empty because box.style only reads INLINE styles (style attribute in HTML)
                         // Cannot read external CSS or <style> tag styles


console.dir(img2.classList);

console.dir(heading.classList);

heading.classList.add("abc");
console.dir(heading.classList);

heading.classList.remove("abc");
console.dir(heading.classList);

// setAttribute("class", "className") replaces ALL classes with only the new one, deleting everything else. So its not prefered
// setAttribute("class") only affects classes, NOT inline styles!

console.log(heading.classList.contains("abc"));

const isAdded = heading.classList.toggle("abc"); // Adds "abc" if absent, removes if present
console.log(isAdded);
console.dir(heading.classList);

console.dir(box.classList);
box.classList.add("yellowBg");
console.dir(box.classList);



// ----- Navigation -----
let h4 = document.querySelector("h4");
console.log(h4.parentElement);

console.log(box.children);
console.log(box.childElementCount);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);

console.log(ul.children[1]);
console.log(ul.children[2]);

console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

console.log(img.previousElementSibling);
img.previousElementSibling.style.fontStyle = "italic";



// ----- Adding Elements -----
let newP = document.createElement("p");
console.dir(newP);

newP.innerText = "Hi, I am a new p";
console.dir(newP);
console.dir(newP.innerText);

box.appendChild(newP);

let btn = document.createElement("button");
console.dir(btn);
btn.innerText = "Click me!";
box.appendChild(btn);

newP.append(", this is new text");

// box.prepend(newP);


let btn2 = document.createElement("button");
btn2.innerText = "New button!!";
box.appendChild(btn2);

newP.append(", this is new text");

let p = document.querySelector("p");
// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("afterbegin", btn);
p.insertAdjacentElement("beforeend", btn);



// ----- Remove elements -----
// p.removeChild(btn);

btn.remove();

newP.remove();
