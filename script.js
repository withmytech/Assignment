// Path to static images and GIFs for each choice
const choices = {
  rock: {
    static: "rockstatic.gif",
    gif: "Rock.gif"
  },
  paper: {
    static: "paperstatic.gif",
    gif: "Paper.gif"
  },
  scissors: {
    static: "scissorstatic.gif",
    gif: "Scissor.gif"
  }
};

// Initialize score
let playerScore = 0;
let computerScore = 0;

// Function that starts the game when a choice is made
function playGame(userSelection) {
  // Randomly select computer choice
  const computerSelection = getComputerChoice();

  // Show GIF for user and computer choices
  updateImage("userChoice", userSelection, "gif");
  updateImage("computerChoice", computerSelection, "gif");

  // After 1 second, change GIFs to static images to simulate "pause"
  setTimeout(() => {
    updateImage("userChoice", userSelection, "static");
    updateImage("computerChoice", computerSelection, "static");
  }, 1000);

  // Determine the result of the game
  const result = determineWinner(userSelection, computerSelection);

  // After a 1.8-second delay, update the winner message
  setTimeout(() => {
    // Display the winner immediately
    document.getElementById("winner").textContent = result;
  }, 1800); // 1.8-second delay for winner message

  // After a 1.8-second delay, update the scores
  setTimeout(() => {
    // Update scores based on the result
    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    // Update the score display
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  }, 1800); // 1.8-second delay for scores update
}

// Function to update images based on the user's or computer's choice
function updateImage(elementId, choice, type) {
  document.getElementById(elementId).src = choices[choice][type];
}

// Function to get a random choice for the computer (rock, paper, or scissors)
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Function to determine the winner based on the user's and computer's choices
function determineWinner(user, computer) {
  if (user === computer) return "It's a draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
