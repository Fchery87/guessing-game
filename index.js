//+ Part 1: Requirements
// You will create a simple guessing game. Using window methods, you will give and receive information from the user in order to direct them toward the correct answer in a limited number of guesses.
// Here is a list of requirements for easy reference:
// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

// Initialize variables
let answer = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let guesses = 0;
const maxGuesses = 5;

// Function to handle user input and game logic
function guessNumber() {
  const userInput = document.getElementById("userInput").value;
  const userGuess = parseInt(userInput);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  guesses++;

  if (userGuess === answer) {
    document.getElementById("result").textContent = `🎉 Bravo! You cracked the secret code ${answer} in just ${guesses} attempts. Looks like your guessing skills are sharper than a porcupine's quills in a balloon factory! 🎈`;
    resetGame();
  } else if (userGuess < answer) {
    document.getElementById("result").textContent = "Whoopsie-doodle! That's lower than a limbo master's morning stretch! Give it another whirl! 🚀";
  } else {
    document.getElementById("result").textContent = "Whoa there, high roller! That's higher than a giraffe on stilts! Give it another shot! 🦒";
  }

  if (guesses < maxGuesses && userGuess !== answer) {
    const remainingGuesses = maxGuesses - guesses;
    document.getElementById("remaining").textContent = `Guesses remaining: ${remainingGuesses}`;
  } else if (guesses === maxGuesses && userGuess !== answer) {
    document.getElementById("result").textContent = `Oops! You've hit the guessing ceiling. The sneaky number was ${answer}. Better luck next time! 🤷‍♂️`;
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  guesses = 0;
  answer = Math.floor(Math.random() * 10) + 1;
  document.getElementById("userInput").value = ""; // Clear input box
  document.getElementById("remaining").textContent = ""; // Clear remaining guess message
}

// Initialize game
document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("h1");
  header.textContent = "Dare to Guess: The Ultimate Challenge";
  document.getElementById("app").appendChild(header);

  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "number");
  inputBox.setAttribute("id", "userInput");
  inputBox.setAttribute("placeholder", "Enter your guess");
  document.getElementById("app").appendChild(inputBox);

  const guessButton = document.createElement("button");
  guessButton.textContent = "Guess";
  guessButton.addEventListener("click", guessNumber);
  document.getElementById("app").appendChild(guessButton);

  const resultDisplay = document.createElement("div");
  resultDisplay.setAttribute("id", "result");
  document.getElementById("app").appendChild(resultDisplay);

  const remainingDisplay = document.createElement("div");
  remainingDisplay.setAttribute("id", "remaining");
  document.getElementById("app").appendChild(remainingDisplay);
});
