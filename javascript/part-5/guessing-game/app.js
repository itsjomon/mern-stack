// Guessing Game
// User enters a max number & then tries to guess a random generated number between 1 to max.

let max;

while(true) {
    let input = prompt("Enter the max number");
    
    if (input === null) {
        console.log("Game cancelled by user");
        break;
    }

    if (input.trim() === "") {
        alert("Please enter a valid number greater than 0");
        continue;
    }

    max = parseInt(input);

    if (isNaN(max) || max <= 0) {
        alert("Please enter a valid number greater than 0");
        continue;
    }

    break;
}

if (max) {
    const random = Math.floor(Math.random() * max) + 1;
    let guess;

    while(true) {
        guess = prompt(`Guess the Number (1 to ${max}) | Type 'quit' to exit`);

        if (guess === null) {
            console.log("Game cancelled by user");
            break;
        }

        if (guess.toLowerCase() === "quit") {
            console.log("You quit the game!");
            break;
        }

        if (guess.trim() === "") {
            alert(`Please enter a valid number (1 to ${max}) or type 'quit'`);
            continue;
        }

        let guessNum = parseInt(guess);

        if (isNaN(guessNum) || guessNum < 1 || guessNum > max) {
            alert(`Please enter a number between 1 and ${max} or type 'quit'`);
            continue;
        }

        if (guessNum === random) {
            console.log(`You are right! Congrats!! Random number was ${random}`);
            break;
        }

        if (guessNum < random) {
            alert("Too small! Try again");
        } else {
            alert("Too large! Try again");
        }
    }
}
