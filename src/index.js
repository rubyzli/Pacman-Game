const canvas = document.querySelector('#game');
const scoreboard = document.querySelector('#scoreboard');

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1,
    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
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

// CreateBoard

const squares = [];

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

let score = 0;

//draw pacman
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacman');

console.log(getCoordinates(pacmanCurrentIndex));

//eating pellets score
function pelletEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pellet')){
        eat.play();
        score++;
        scoreboard.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove('pellet');
    }
}

function gameLoop () {

}

function update() {
    setInterval(gameLoop, 1000/60);
}



