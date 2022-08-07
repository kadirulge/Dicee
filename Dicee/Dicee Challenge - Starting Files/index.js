var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = randomDice1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = randomDice2;


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = " 🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}