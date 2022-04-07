'use strict';

const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stoptRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}

function startGame () {
    start.classList.add('hide');
}

function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}

function stoptRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}