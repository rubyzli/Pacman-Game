const canvas = document.querySelector('#game');

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
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
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
         }
    }
}

createBoard();



function gameLoop () {

}





function update() {
    setInterval(gameLoop, 1000/60);
}



