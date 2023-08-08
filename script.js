let currentPlayer = Math.floor(Math.random() * 2) + 1; // Randomly choose starting player
let scores = [0, 0];

const rollDice = (player) => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  scores[player - 1] += rollResult;
  document.getElementById(`score${player}`).textContent = scores[player - 1];

  // Update dice image
  const diceImage = document.getElementById("diceImage");
  diceImage.src = `dice${rollResult}.png`;
  diceImage.alt = `Dice ${rollResult}`;

  document.getElementById(`roll${player}`).disabled = true;
  document.getElementById(`roll${3 - player}`).disabled = false;

  if (scores[player - 1] >= 30) {
    document.getElementById(`roll1`).disabled = true;
    document.getElementById(`roll2`).disabled = true;
    document.getElementById(`reset`).disabled = false;
    alert(`Player ${player} wins!`);
  }
};

const resetGame = () => {
  currentPlayer = Math.floor(Math.random() * 2) + 1;
  scores = [0, 0];

  document.getElementById(`score1`).textContent = 0;
  document.getElementById(`score2`).textContent = 0;
  document.getElementById(`roll1`).disabled = currentPlayer === 2;
  document.getElementById(`roll2`).disabled = currentPlayer === 1;
  document.getElementById(`reset`).disabled = true;

  // Reset dice image
  const diceImage = document.getElementById("diceImage");
  diceImage.src = "dice1.png";
  diceImage.alt = "Dice 1";
};

// Enable the roll button for the initial player and update dice image
document.getElementById(`roll${currentPlayer}`).disabled = false;














