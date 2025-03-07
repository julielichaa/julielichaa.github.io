let input;
let scrambleButton;
let timer;
let scrambledWord = "";
let originalWord = "";
let timeLimit = 30;
let timeLeft = timeLimit;
let gameStarted = false;
let gameOver = false;
let scrambledLetters = [];
let timerInterval;
let message = "";

function setup() {
  createCanvas(600, 400);
  // Create a text input for the user to enter their word
  input = createInput();
  input.position(20, height - 80);
  
  // Create a scramble button
  scrambleButton = createButton('Scramble Word');
  scrambleButton.position(input.x + input.width + 10, height - 80);
  scrambleButton.mousePressed(scrambleWord);
  
  // Create a timer display
  timer = createP('');
  timer.position(width / 2 - 40, 20);
  
  // Start a new game button
  let startButton = createButton('Start New Game');
  startButton.position(width / 2 - 60, height - 40);
  startButton.mousePressed(startNewGame);
}

function draw() {
  background(240);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  // Display the scrambled word
  if (gameStarted && !gameOver) {
    displayScrambledWord();
    
    // Display the timer
    timer.html('Time Left: ' + timeLeft);
    
    // Check if time runs out
    if (timeLeft <= 0) {
      gameOver = true;
      message = 'Game Over! Time is up.';
      clearInterval(timerInterval);  // Stop the timer
    }
  } 
  
  // Display message after game ends
  if (gameOver) {
    textSize(32);
    fill(0);
    text(message, width / 2, height / 2);
  } else if (gameStarted) {
    fill(0);
    text('Guess the Scrambled Word!', width / 2, height / 4);
  }
  
  // Draw the input box and listen for key press to check the guess
  if (gameStarted && !gameOver) {
    let userGuess = input.value();
    if (userGuess === originalWord) {
      gameOver = true;
      message = 'You Win! The word was: ' + originalWord;
      clearInterval(timerInterval);  // Stop the timer
    }
  }
}

function scrambleWord() {
  if (input.value().length > 0) {
    originalWord = input.value().toLowerCase();
    scrambledLetters = scramble(originalWord);
    scrambledWord = scrambledLetters.join('');
    gameStarted = true;
    gameOver = false;
    timeLeft = timeLimit;
    
    // Start the timer
    clearInterval(timerInterval);  // Clear previous timer if any
    timerInterval = setInterval(function() {
      timeLeft--;
    }, 1000);
  }
}

function displayScrambledWord() {
  // Display the scrambled word in large font
  textSize(48);
  fill(0);
  text(scrambledWord, width / 2, height / 2);
}

function scramble(word) {
  let arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap letters
  }
  return arr;
}

function startNewGame() {
  gameStarted = false;
  gameOver = false;
  scrambledWord = "";
  input.value('');
  message = "";
}
