let playerScore = 0;
let computerScore = 0;

function userChoice(choice) {
  disableButtons();

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  displayFistBounce(() => {
    displayChoices(choice, computerChoice);
    const result = compareChoices(choice, computerChoice);
    updateScore(result);
    displayResultMessage(result);
    enableButtons();
  });
}

function compareChoices(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResultMessage(result) {
  const resultMessage = document.getElementById("resultMessage");
  resultMessage.textContent =
    result === "You win!"
      ? "Player Win"
      : result === "Computer wins!"
      ? "Computer Win"
      : "Tie";
}

function displayResult(result, userChoice, computerChoice) {
  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `${result}<br>You chose ${userChoice}. Computer chose ${computerChoice}.`;
}

function updateScore(result) {
  const playerScoreText = document.getElementById("playerScore");
  const computerScoreText = document.getElementById("computerScore");

  if (result === "You win!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function displayFistBounce(callback) {
  const resultText = document.getElementById("resultText");
  resultText.textContent = "Fist Bouncing...";

  setTimeout(() => {
    resultText.textContent = ""; // Clear the "fist bounce" message after 2 seconds
    callback(); // Execute the callback function (displayChoices) after the delay
  }, 2000); // Wait for 2 seconds for the bounce animation
}

function displayChoices(userChoice, computerChoice) {
  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.`;
}

function disableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreText = document.getElementById("playerScore");
  const computerScoreText = document.getElementById("computerScore");
  const resultMessage = document.getElementById("resultMessage");

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultMessage.textContent = ""; // Clear the result message

  const resultText = document.getElementById("resultText");
  resultText.textContent = ""; // Clear result text
}
