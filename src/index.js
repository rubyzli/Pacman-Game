const canvas = document.querySelector('#game');
const scoreboard = document.querySelector('#scoreboard');

let width = 28;


let bgImg = [
    '../assets/images/ghosts/ghost-blinky-down.png',
    '../assets/images/ghosts/ghost-blinky-left.png',
    '../assets/images/ghosts/ghost-blinky-right.png',
    '../assets/images/ghosts/ghost-blinky-up.png'
]

// setInterval('blinkyGhost()', 400);

function blinkyGhost() {
    let x = 0;
    document.querySelector('.blinkyghost').src = bgImg[x];
    x++;
    if(bgImg.length === x){
        x = 0;
    }
}

const layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1],
    [8, 8, 8, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 8, 8, 8],
    [1, 1, 1, 1, 2, 1, 2, 1, 1, 4, 1, 1, 2, 1, 2, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 1, 5, 2, 6, 1, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 2, 1, 2, 1, 1, 7, 1, 1, 2, 1, 2, 1, 1, 1, 1],
    [8, 8, 8, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 8, 8, 8],
    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1],
    [1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const squares = [];

// CreateBoard
let classes = {
    1: 'wall',
    2: 'pellet',
    3: 'powerpellet',
    4: 'blinkyghost',
    5: 'pinkyghost',
    6: 'inkyghost',
    7: 'clydeghost',
    8: 'pacman'
}
let startPosition = {
    i: 0,
    j: 0
}
function createBoard () {
    for(let i = 0; i < layout.length; i++){
        for(let j =0; j < layout[i].length; j++){
            let square = document.createElement('div');

            canvas.appendChild(square);
            // squares[i] = [];
            squares[`${i}-${j}`] = square;
            // console.log(squares)

            Object.keys(classes).forEach((x) => {
                console.log('x', x, 'layout', layout[i][j]);
                if (layout[i][j] == x) {
                    console.log("HAHAHAHAH")
                    squares[`${i}-${j}`].classList.add(classes[x]);
                }
            })
            if(layout[i][j] === 0){
                startPosition.i = i;
                startPosition.j = j;
                squares[`${i}-${j}`].classList.add('pacman');
                squares[`${i}-${j}`].appendChild(document.querySelector('#pac1'));
            }

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

let pacMan = document.querySelector('#pac1');


let images = new Array();
images = ['./assets/images/pacman_32px/pacman-0.png',
        './assets/images/pacman_32px/pacman-1.png',
        './assets/images/pacman_32px/pacman-3.png'];

        
let x = 0;

setInterval(function animation(){
    pacMan.src = images[x];
    x++;
    if(images.length === x){
        x = 0;
    }
    
}, 100);

//  function pacmanPosition(){
//      let pacMan = document.querySelector('#pac1');
//      let position = pacMan.getBoundingClientRect();
//      return position;
//  }
// let pacPosition = new Object();
//  pacPosition = pacmanPosition();

//  function wallPosition(wall){
//     let position = wall.getBoundingClientRect();
//     return position   
// }
// let wallPositionn = new Object();
// wallPositionn = wallPosition(wall);


// function isColliding(position, wallp){
//     if(
//         position.x > wallp.x &&
//         position.y < wallp.y 
//     ) {
//         console.log('true')
//     } else {
//         console.log('false');
//     }
// }
// setInterval(isColliding(pacPosition, wallPositionn), 20);

pacMan = null;

let animate;

function init(){
    pacMan = document.querySelector('#pac1');
    /*pacMan.style.position = 'relative';
    pacMan.style.left = '288px';
    pacMan.style.top = '96px';*/
}

function move(position, direction){
    // if()
}

function moveRight(){
    pacMan.style.transform = 'rotate(0deg)';
    // pacMan.style.left = parseInt(pacMan.style.left) + 3 + 'px';
    // animate = setTimeout(moveRight, 20);
    let pacmanPosition = squares[`${startPosition.i}-${startPosition.j}`];
    let nextElement = squares[`${startPosition.i}-${startPosition.j+1}`];
    console.log(nextElement.classList);

    if(nextElement.classList.value == 'pellet'){
        nextElement.classList.remove('pellet');
        nextElement.classList.add('pacman');
        nextElement.appendChild(document.getElementById('pac1'));
        
        pacmanPosition.empty();

        startPosition.j += 1;
    }
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


