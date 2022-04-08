'use strict';

const score = document.querySelector('.score'), // Zähler
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'), // Spielfeld
      car = document.createElement('div'); 
      car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stoptRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}

const setting = {
    start: false,
    score: 0, 
    spead: 3
}

function startGame() {
    start.classList.add('hide');
    gameArea.append(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('Play!!!');
    if(setting.start) {
        requestAnimationFrame(playGame);
    }
}


function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}

function stoptRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}