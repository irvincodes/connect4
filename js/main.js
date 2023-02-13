/*----- constants -----*/

/*----- state variables -----*/
const game = {
  screen: "game",
};

/*----- cached elements  -----*/
const welcomeScreen = document.querySelector("#welcome");
const gameScreen = document.querySelector("#game");
/*----- event listeners -----*/

function clickStartButton() {
  game.screen = "board";
  renderAll();
}

function clickScoreButton() {
  game.screen = "score";
  renderAll();
}

function renderScreen() {
  welcomeScreen.style.display = "none"; //? block will show
}

function renderAll() {
  renderScreen();
}

/*----- functions -----*/
const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", clickStartButton);

const scoreButton = document.querySelector("#scoreButton");
scoreButton.addEventListener("click", clickScoreButton);
