// Ans 1
const box = document.querySelector(".box");

box.addEventListener("mouseout", function() {
    console.log("Mouse left!");
});

document.addEventListener("keypress", function(e) {
    console.log("Key pressed:", e.key);
});

window.addEventListener("scroll", function() {
    console.log("Scrolled!");
});

window.addEventListener("load", function() {
    console.log("Page loaded!");
});



// Ans 2
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.prepend(button);

button.addEventListener("click", function() {
    this.style.backgroundColor = "green";
});



// Ans 3
const input = document.getElementById("nameInput");
const heading = document.getElementById("displayName");

input.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
    heading.textContent = this.value;
});