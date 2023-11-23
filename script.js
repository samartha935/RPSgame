let  playerScore=0, computerScore=0;

let rounds = parseInt(prompt("Enter the number of rounds you want to play : "));

for (let i = 0; i < rounds; i++) {
  let playerChoice = prompt("You Turn : Enter Rock, Paper or scissor");

  let computerChoice = RandomComputerChoice();

  compare(computerChoice, playerChoice);

}

decideWinner();




function RandomComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random()*choice.length);
  return choice[random];

}

function compare(computerChoice, playerChoice) {
  player = playerChoice.toLowerCase();
  computer = computerChoice.toLowerCase();

  if (player == "rock" && computer == "scissor") {
    playerScore++;
    alert("Computer chose scissor. You won this round.  \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore} ");
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    alert("Computer chose rock. You won this round.  \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}");
  } else if (player == "scissor" && computer == "paper") {
    playerScore++;
    alert("Computer chose paper. You won this round.  \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore} ");
  } else if (player == "rock" && computer == "paper") {
      playerScore++;
    alert("Computer chose paper. You lost this round.  \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else if (player == "paper" && computer == "scissor") {
    computerScore++;
    alert("Computer chose scissor. You lost this round.   \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else if (player == "scissor" && computer == "rock") {
    computerScore++;
    alert("Computer chose rock. You lost this round.   \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else if (player == "rock" && computer == "rock") {
    alert("Computer chose rock. No Points.   \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else if (player == "paper" && computer == "paper") {
    alert("Computer chose paper. No Points.   \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else if (player == "scissor" && computer == "scissor") {
    alert("Computer chose scissor. No Points.   \n  Score :- \n PLAYER : ${playerScore}  COMPUTER : ${computerScore}  ");
  } else {
alert("Invalid entry. Try again");
}

}

function decideWinner() {
  if (playerScore > computerScore) {
    alert(`You Won the Game ${playerScore} - ${computerScore}.`);
  }
  else if (playerScore < computerScore) {
    alert(`You Lost the Game ${computerScore} - ${playerScore}.`);
  }
  else {
    alert(`Its a tie ${computerScore} - ${playerScore}.`);
  }

}