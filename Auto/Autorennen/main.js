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
    speed: 3
}

function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.append(car);
    setting.x = car.offsetLeft;
    setting.y = car.offsetHeight;
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('Play!!!');
    if(setting.start) {
        if (keys.ArrowLeft) {
            setting.x -= setting.speed;
        }
        if (keys.ArrowRight) {
            setting.x += setting.speed;
        }
        if (keys.ArrowDown) {
            setting.y += setting.speed;
        }
        if (keys.ArrowUp) {
            setting.y -= setting.speed;
        }

        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';
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