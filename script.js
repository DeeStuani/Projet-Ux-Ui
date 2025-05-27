let board = ["", "", "", "", "", "", "", "", ""];
 let currentPlayer = "X";
 let gameActive = true;
 
 function makeMove(index) {
     if (board[index] === "" && gameActive) {
         board[index] = currentPlayer;
         document.getElementsByClassName("cell")[index].innerText = currentPlayer;
         
         if (checkWinner()) {
             document.getElementById("status").innerText = `Jogador ${currentPlayer} venceu!`;
             gameActive = false;
             return;
         }
 
         if (board.every(cell => cell !== "")) {
             document.getElementById("status").innerText = "Empate!";
             gameActive = false;
             return;
         }
 
         currentPlayer = currentPlayer === "X" ? "O" : "X";
     }
 }
 
 function checkWinner() {
     const winningCombos = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], 
         [0, 3, 6], [1, 4, 7], [2, 5, 8], 
         [0, 4, 8], [2, 4, 6]
     ];
 
     return winningCombos.some(combo => {
         return board[combo[0]] !== "" &&
                board[combo[0]] === board[combo[1]] &&
                board[combo[1]] === board[combo[2]];
     });
 }
 
 function resetGame() {
     board = ["", "", "", "", "", "", "", "", ""];
     currentPlayer = "X";
     gameActive = true;
     document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
     document.getElementById("status").innerText = "";
 }
 // Submenu de acessibilidade
const accessibilityBtn = document.getElementById('accessibility-btn');
const subOptions = document.getElementById('sub-options');

accessibilityBtn.addEventListener('click', () => {
  subOptions.classList.toggle('show');
});

// Tema claro/escuro
const toggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('.toggle-label');

// Estado inicial salvo no localStorage (opcional)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
  themeLabel.textContent = '🌚';
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  themeLabel.textContent = isDark ? '🌚' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
