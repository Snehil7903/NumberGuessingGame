const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;

document.getElementById("label").textContent = `Guess a number between ${minNum} and ${maxNum}`;

// while (running) {

document.getElementById("submit").onclick = function () {
    guess = document.getElementById("input").value;
    guess = Number(guess);


    if (isNaN(guess)) {
        document.getElementById("result").textContent = `Please enter a valid number`;
    }
    else if (guess < minNum || guess > maxNum) {
        document.getElementById("result").textContent = `Please enter a valid number`;

    }
    else {
        attempts++
        if (guess < answer) {
            document.getElementById("result").textContent = `Too Low! Try Again`;


        }
        else if (guess > answer) {
            document.getElementById("result").textContent = `Too High! Try Again`;

        }

        else {
            document.getElementById("result").textContent = `Correct the answer was ${answer}. You took ${attempts} attempts`;
        }
    }
}
// }