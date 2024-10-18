const secretNumber = 7; // Define the secret number
let attempts = 0; // Initialize attempts counter

function checkGuess() {
    const secretnum = parseInt(document.getElementById('secretnum').value); // Get user input
    const messageElement = document.getElementById('message'); // Get message element
    const attemptsElement = document.getElementById('attempts'); // Get attempts element

    attempts++; // Increment attempts counter

    if (secretnum === secretNumber) {
        messageElement.textContent = "Bingo! You guessed the right number.";
    } else if (secretnum === secretNumber + 1 || secretnum === secretNumber - 1) {
        messageElement.textContent = "Close enough to the correct answer.";
    } else {
        messageElement.textContent = "Sorry, that's not correct. Try again!";
    }

    attemptsElement.textContent = `Attempts: ${attempts}`; // Update attempts display
}

function restartGame() {
    document.getElementById('secretnum').value = ''; // Clear input field
    document.getElementById('message').textContent = ''; // Clear message
    attempts = 0; // Reset attempts counter
    document.getElementById('attempts').textContent = 'Attempts: 0'; // Reset attempts display
}