//+ Part 1: Requirements
// You will create a simple guessing game. Using window methods, you will give and receive information from the user in order to direct them toward the correct answer in a limited number of guesses.
// Here is a list of requirements for easy reference:
// Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

// const targetNumber = Math.floor(Math.random() * 10) + 1;
// let guesses = 0;

// function playGame() {
//   const userGuess = parseInt(window.prompt('Guess a number between 1 and 10:'));
//   guesses++;
//   document.getElementById('guesses').textContent = guesses;

//   if (userGuess === targetNumber) {
//     alert(`Yea Boy! You guessed the number ${targetNumber} correctly in ${guesses} guesses.`);
//   } else if (userGuess < targetNumber) {
//     alert('Too low Suckka. Try again.');
//     playGame();
//   } else {
//     alert('Too high, Stop Cutting Grass. Try again.');
//     playGame();
//   }
// }

const maxGuesses = 10;
    let remainingGuesses = maxGuesses;
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let guesses = 0;

    function updateGuesses() {
      document.getElementById('guesses').textContent = guesses;
    }

    function updateRemaining() {
      document.getElementById('remaining').innerHTML = remainingGuesses;
    }

    function playGame() {
      const userGuess = parseInt(window.prompt('Guess a number between 1 and 10:'));
      guesses++;
      updateGuesses();

      if (userGuess === targetNumber) {
        alert(`Yeah, boy! You guessed the number ${targetNumber} correctly in ${guesses} guesses.`);
      } else if (userGuess < targetNumber) {
        alert('Too low, sucka! Try again.');
      } else {
        alert('Too high, Stop Cutting Grass. Try again.');
      }

      remainingGuesses--;
      updateRemaining();

      if (remainingGuesses > 0 && userGuess !== targetNumber) {
        playGame();
      } else {
        if (remainingGuesses === 0) {
          alert(`Sorry, you have used all your guesses. The number was ${targetNumber}.`);
        }
      }
    }

    updateRemaining();
    playGame();


