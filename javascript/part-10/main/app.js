// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     // console.log("button clicked");
//     alert("hacked by hckrrrrrr");
// }



let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("You entered a button");
    // }

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayHi);
    // btn.addEventListener("dblclick", function() {
    //     console.log("you double clicked");
    // });

    // btn.addEventListener("click", function() {
    //     // console.log(this);
    //     console.log(this.innerText);
    //     this.style.backgroundColor = "blue";
    // });

    btn.addEventListener("click", changeColor);

    btn.addEventListener("dblclick", function(event) {
        console.log(event);
    });
}

function sayHello() {
    alert("Hello!");
}

function sayHi() {
    alert("Hi");
}



let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("paragraph clicked");
});


let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("mouse inside box");
});


let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}


let inp = document.querySelector("input");

// inp.addEventListener("keydown",  function () {
//     console.log("key was pressed");
// });

inp.addEventListener("keydown",  function (event) {
    // console.log(event);
    // console.log(event.key);
    // console.log(event.code);

    if (event.code == "ArrowUp") {
        console.log("Move forward")
    } else if (event.code == "ArrowDown") {
        console.log("Move backward")
    } else if (event.code == "ArrowLeft") {
        console.log("Turn Left")
    } else if (event.code == "ArrowRight") {
        console.log("Turn Right")
    } else {
        console.log("Wrong key")
    }
});



let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // // // alert("form submited");

    // // let user = document.querySelector("#user");
    // // let pass = document.querySelector("#pass");
    // // // console.dir(input);
    // // console.log(user.value);
    // // console.log(pass.value);

    // // alert(`Hi ${user.value}, your passsword is ${pass.value}`);

    // console.dir(form);

    // let user = this.elements[0];
    // let pass = this.elements[1];

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, your passsword is ${pass.value}`);

});


let user = document.querySelector("#user");
user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value = ", this.value);
});



let text = document.querySelector("#text");
let tp = document.querySelector(".tp");
text.addEventListener("input", function() {
    console.log(text.value);
    tp.innerText = text.value;
});