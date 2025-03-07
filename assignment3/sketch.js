let board = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = 'X';
let gameOver = false;
let resetButton;
let statusMessage;
let toggleThemeButton;
let textAlpha = 0;
let textDirection = 1;
let lastUpdateTime = 0;
let darkMode = false;
let player1Name = 'Player X';
let player2Name = 'Player O';
let inputField;

function setup() {
  createCanvas(400, 400);
  let cellSize = width / 3;
  
  resetButton = createButton('Reset Game');
  resetButton.position(width / 7 - 4, height + 100);
  resetButton.mousePressed(resetGame);
  
  toggleThemeButton = createButton('Toggle Theme');
  toggleThemeButton.position(width / 2 - 50, height + 100);
  toggleThemeButton.mousePressed(toggleTheme);
  
  statusMessage = createDiv(`Player X's turn`);
  statusMessage.position(width / 1.25 - 75, 19);
  statusMessage.style('font-size', '24px');
  statusMessage.style('font-weight', 'bold');
  statusMessage.style('text-align', 'center');
  statusMessage.style('color', '#333');
  
  // Create a text input field for player names
  inputField = createInput();
  inputField.position(10, height + 40);
  inputField.size(200, 30);
  inputField.input(handleInput);  // Call this function when the input changes
  
  noLoop();
}

function handleInput() {
  let inputText = inputField.value();
  // If Player 1's turn, update Player 1's name
  if (currentPlayer === 'X' && inputText !== '') {
    player1Name = inputText;
    statusMessage.html(`${player1Name}'s turn`);
  }
  // If Player 2's turn, update Player 2's name
  else if (currentPlayer === 'O' && inputText !== '') {
    player2Name = inputText;
    statusMessage.html(`${player2Name}'s turn`);
  }
}

function draw() {
  background(darkMode ? 50 : 255);
  drawBoard();
  checkWinner();
  updateStatusText();
  displayStatusText();
}

function drawBoard() {
  let cellSize = width / 3;
  
  stroke(darkMode ? 255 : 0);
  strokeWeight(4);
  line(cellSize, 0, cellSize, height);
  line(cellSize * 2, 0, cellSize * 2, height);
  line(0, cellSize, width, cellSize);
  line(0, cellSize * 2, width, cellSize * 2);
  
  textSize(64);
  textAlign(CENTER, CENTER);
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = col * cellSize + cellSize / 2;
      let y = row * cellSize + cellSize / 2;
      let cell = board[row][col];
      if (cell == 'X') {
        fill(255, 0, 0);
        text('X', x, y);
      } else if (cell == 'O') {
        fill(0, 0, 255);
        text('O', x, y);
      }
    }
  }
}

function mousePressed() {
  if (gameOver) return;
  
  let cellSize = width / 3;
  let col = floor(mouseX / cellSize);
  let row = floor(mouseY / cellSize);
  
  if (board[row][col] == '') {
    board[row][col] = currentPlayer;
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusMessage.html(`${currentPlayer === 'X' ? player1Name : player2Name}'s turn`);
    textAlpha = 0;
    redraw();
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] != '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      declareWinner(board[i][0]);
      return;
    }
    if (board[0][i] != '' && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
      declareWinner(board[0][i]);
      return;
    }
  }
  
  if (board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
    declareWinner(board[0][0]);
    return;
  }
  
  if (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
    declareWinner(board[0][2]);
    return;
  }
  
  let isDraw = true;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == '') {
        isDraw = false;
      }
    }
  }
  if (isDraw) {
    statusMessage.html('Draw!');
    gameOver = true;
  }
}

function declareWinner(winner) {
  statusMessage.html(`${winner === 'X' ? player1Name : player2Name} wins!`);
  gameOver = true;
}

function resetGame() {
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer = 'X';
  statusMessage.html(`${player1Name}'s turn`);
  textAlpha = 0;
  gameOver = false;
  redraw();
}

function toggleTheme() {
  darkMode = !darkMode;
  statusMessage.style('color', darkMode ? '#FFF' : '#333');
  redraw();
}

function updateStatusText() {
  let currentTime = millis();
  
  if (currentTime - lastUpdateTime > 500) {
    if (textDirection == 1) {
      textAlpha += 5;
      if (textAlpha >= 255) {
        textAlpha = 255;
        textDirection = -1;
      }
    } else {
      textAlpha -= 5;
      if (textAlpha <= 0) {
        textAlpha = 0;
        textDirection = 1;
      }
    }
    lastUpdateTime = currentTime;
  }
}

function displayStatusText() {
  fill(darkMode ? 255 : 0, textAlpha);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(statusMessage.html(), width / 1000, 900);
}
