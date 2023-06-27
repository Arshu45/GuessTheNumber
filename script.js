"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = secretNumber;
};

const widthStyle = function (width) {
  document.querySelector(".number").style.width = width;
};

const displayBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Plz enter a number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct guess 🏆");
    displayBackgroundColor("#60b347");
    widthStyle("30rem");
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? "Slightly low guess📉 Try again!"
          : "Slightly high guess📈 Try again!"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lose! No attempts left");
      displayScore(0);
    }
  } else {
    displayMessage("Error");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayBackgroundColor("#222");
  widthStyle("15rem");
  displayNumber("?");
  displayScore(20);
  document.querySelector(".guess").value = " ";
  displayMessage("Start guessing...");
});
