const canvas = document.querySelector('#game');
const scoreboard = document.querySelector('#scoreboard');

let bgImg = [
    '../assets/images/ghosts/ghost-blinky-down.png',
    '../assets/images/ghosts/ghost-blinky-left.png',
    '../assets/images/ghosts/ghost-blinky-right.png',
    '../assets/images/ghosts/ghost-blinky-up.png'
]

setInterval('blinkyGhost()', 400);

function blinkyGhost() {
    let x = 0;
    document.querySelector('.blinkyghost').src = bgImg[x];
    x++;
    if(bgImg.length === x){
        x = 0;
    }
}

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1,
    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
    8, 8, 8, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 8, 8, 8,
    1, 1, 1, 1, 2, 1, 2, 1, 1, 4, 1, 1, 2, 1, 2, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 1, 5, 2, 6, 1, 2, 2, 2, 2, 2, 2, 2,
    1, 1, 1, 1, 2, 1, 2, 1, 1, 7, 1, 1, 2, 1, 2, 1, 1, 1, 1,
    8, 8, 8, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 8, 8, 8,
    1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1,
    1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1,
    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]

const squares = [];

// CreateBoard

function createBoard () {
    for(let i = 0; i < layout.length; i++){
        let square = document.createElement('div');
        canvas.appendChild(square);
         squares.push(square);

         if(layout[i] === 1){
            squares[i].classList.add('wall');
         } else if(layout[i] === 2){
            squares[i].classList.add('pellet');
         } else if(layout[i] === 3){
            squares[i].classList.add('powerpellet');
         } else if(layout[i] === 4){
            squares[i].classList.add('blinkyghost');
         } else if(layout[i] === 5){
            squares[i].classList.add('pinkyghost');
         } else if(layout[i] === 6){
            squares[i].classList.add('inkyghost');
         } else if(layout[i] === 7){
            squares[i].classList.add('clydeghost');
         } else if(layout[i] === 0){
            squares[i].classList.add('pacman');
         }
    }
}

createBoard();

let score = 0;

function calculateScore(){

}

function gameLoop () {

}

function update() {
    setInterval(gameLoop, 1000/60);
}


//Pacman movement & Animation

let pacMan = document.getElementById('pac1');
let pacMan2 = document.getElementById('pac2');
let pacMan3 = document.getElementById('pac3');

let images = new Array();
images = ['./assets/images/pacman2/pacman-0.png',
        './assets/images/pacman2/pacman-1.png',
        './assets/images/pacman2/pacman-2.png'];

        
        let x = 0;

        setInterval(function animation(){
            pacMan.src = images[x];
            x++;
            if(images.length === x){
                x = 0;
            }
        }, 60)


pacMan = null;

let animate;

function init(){
    pacMan = document.getElementById('pac1');
    pacMan.style.position = 'relative';
    pacMan.style.left = '0px';
    pacMan.style.top = '0px';
}


function moveRight(){
    pacMan.style.transform = 'rotate(0deg)';
    pacMan.style.left = parseInt(pacMan.style.left) + 3 + 'px';
    animate = setTimeout(moveRight, 20);
}

function moveLeft(){
    pacMan.style.transform = 'rotate(180deg)';
    pacMan.style.left = parseInt(pacMan.style.left) - 3 + 'px';
    animate = setTimeout(moveLeft, 20);
}
function moveDown(){
    pacMan.style.transform = 'rotate(90deg)';
    pacMan.style.top = parseInt(pacMan.style.top) + 3 + 'px';
   animate = setTimeout(moveDown, 20);
}
function moveUp(){
    pacMan.style.transform = 'rotate(-90deg)';
    pacMan.style.top = parseInt(pacMan.style.top) - 3 + 'px'
    animate = setTimeout(moveUp, 20);
}

function stop(){
    clearTimeout(animate)
}

document.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowRight'){
        stop(animate)
        return moveRight()
    } else if (e.key === 'ArrowLeft'){
        stop(animate)
        return moveLeft()
    } else if(e.key === 'ArrowDown'){
        stop(animate)
        return moveDown()
    } else if(e.key === 'ArrowUp') {
        stop(animate)
        return moveUp()
    }
})

window.onload = init;

