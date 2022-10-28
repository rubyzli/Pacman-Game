const canvas = document.querySelector("#game");
const scoreboard = document.querySelector("#scoreboard");
const scoreDisplay = document.querySelector("#score");
const LEFTBUTTON = document.querySelector("#buttonLeft");
const RIGHTBUTTON = document.querySelector("#buttonRight");
const TOPBUTTON = document.querySelector("#buttonTOP");
const DOWNBUTTON = document.querySelector("#buttonDown");

LEFTBUTTON.addEventListener("click", moveLeft);
RIGHTBUTTON.addEventListener("click", moveRight);
TOPBUTTON.addEventListener("click", moveUp);
DOWNBUTTON.addEventListener("click", moveDown);

let width = 28;

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
];

const squares = [];

// CreateBoard
let classes = {
  1: "wall",
  2: "pellet",
  3: "powerpellet",
  4: "blinkyghost",
  5: "pinkyghost",
  6: "inkyghost",
  7: "clydeghost",
  8: "pacman",
  9: "empty",
};
let startPosition = {
  i: 0,
  j: 0,
};

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      let square = document.createElement("div");

      canvas.appendChild(square);
      squares[`${i}-${j}`] = square;

      Object.keys(classes).forEach((x) => {
        console.log("x", x, "layout", layout[i][j]);
        if (layout[i][j] == x) {
          squares[`${i}-${j}`].classList.add(classes[x]);
        }
      });
      if (layout[i][j] === 0) {
        startPosition.i = i;
        startPosition.j = j;
        squares[`${i}-${j}`].classList.add("pacman");
        squares[`${i}-${j}`].appendChild(document.querySelector("#pac1"));
      }
    }
  }
}
createBoard();

let score = 0;

function calculateScore() {}

function gameLoop() {}

//Pacman movement & Animation

let pacMan = document.querySelector("#pac1");

let images = new Array();
images = [
  "./assets/images/pacman_32px/pacman-0.png",
  "./assets/images/pacman_32px/pacman-1.png",
  "./assets/images/pacman_32px/pacman-3.png",
];

let x = 0;

setInterval(function animation() {
  pacMan.src = images[x];
  x++;
  if (images.length === x) {
    x = 0;
  }
}, 100);

pacMan = null;

let animate;

function init() {
  pacMan = document.querySelector("#pac1");
}

function moveRight() {
  pacMan.style.transform = "rotate(0deg)";
  let pacmanPosition = squares[`${startPosition.i}-${startPosition.j}`];
  let nextElement = squares[`${startPosition.i}-${startPosition.j + 1}`];

  if (nextElement.classList.value == "pellet") {
    score++;
    scoreDisplay.innerHTML = score;
    if (score === 180) {
      setTimeout(function () {
        alert("YOU WON !");
      }, 500);
    }
    nextElement.classList.remove("pellet");

    startPosition.j++;
    animate = setTimeout(moveRight, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.j += 1;
  } else if (nextElement.classList.value === "pacman") {
    nextElement.classList.remove("pacman");
    startPosition.j++;
    animate = setTimeout(moveRight, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));
    pacmanPosition.empty();

    startPosition.j += 1;
  } else if (nextElement.classList.value == "powerpellet") {
    nextElement.classList.remove("powerpellet");
    startPosition.j++;
    animate = setTimeout(moveRight, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.j += 1;
  }
}

function moveLeft() {
  pacMan.style.transform = "rotate(180deg)";
  let pacmanPosition = squares[`${startPosition.i}-${startPosition.j}`];
  let nextElement = squares[`${startPosition.i}-${startPosition.j - 1}`];

  if (nextElement.classList.value == "pellet") {
    score++;
    scoreDisplay.innerHTML = score;
    if (score === 180) {
      setTimeout(function () {
        alert("YOU WON !");
      }, 500);
    }
    nextElement.classList.remove("pellet");
    startPosition.j--;
    animate = setTimeout(moveLeft, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.j -= 1;
  } else if (nextElement.classList.value === "pacman") {
    nextElement.classList.remove("pacman");
    startPosition.j--;
    animate = setTimeout(moveLeft, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));
    pacmanPosition.empty();

    startPosition.j -= 1;
  } else if (nextElement.classList.value == "powerpellet") {
    nextElement.classList.remove("powerpellet");
    startPosition.j--;
    animate = setTimeout(moveLeft, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.j -= 1;
  }
}

function moveDown() {
  pacMan.style.transform = "rotate(90deg)";

  let pacmanPosition = squares[`${startPosition.i}-${startPosition.j}`];
  let nextElement = squares[`${startPosition.i + 1}-${startPosition.j}`];

  if (nextElement.classList.value == "pellet") {
    score++;
    scoreDisplay.innerHTML = score;
    if (score === 180) {
      setTimeout(function () {
        alert("YOU WON !");
      }, 500);
    }
    nextElement.classList.remove("pellet");
    nextElement.classList.add("pacman");
    startPosition.i++;
    animate = setTimeout(moveDown, 150);
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.i += 1;
  } else if (nextElement.classList.value === "pacman") {
    nextElement.classList.remove("pacman");
    startPosition.i++;
    animate = setTimeout(moveDown, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));
    pacmanPosition.empty();

    startPosition.i += 1;
  } else if (nextElement.classList.value == "powerpellet") {
    nextElement.classList.remove("powerpellet");
    startPosition.i++;
    animate = setTimeout(moveDown, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.i += 1;
  }
}

function moveUp() {
  pacMan.style.transform = "rotate(-90deg)";

  let pacmanPosition = squares[`${startPosition.i}-${startPosition.j}`];
  let nextElement = squares[`${startPosition.i - 1}-${startPosition.j}`];

  if (nextElement.classList.value == "pellet") {
    score++;
    scoreDisplay.innerHTML = score;
    if (score === 180) {
      setTimeout(function () {
        alert("YOU WON !");
      }, 500);
    }
    nextElement.classList.remove("pellet");
    nextElement.classList.add("pacman");
    startPosition.i--;
    animate = setTimeout(moveUp, 150);
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.i -= 1;
  } else if (nextElement.classList.value === "pacman") {
    nextElement.classList.remove("pacman");
    startPosition.i--;
    animate = setTimeout(moveUp, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));
    pacmanPosition.empty();

    startPosition.setInterval -= 1;
  } else if (nextElement.classList.value == "powerpellet") {
    nextElement.classList.remove("powerpellet");
    startPosition.i--;
    animate = setTimeout(moveUp, 150);
    nextElement.classList.add("pacman");
    nextElement.appendChild(document.getElementById("pac1"));

    pacmanPosition.empty();

    startPosition.j -= 1;
  }
}

function stop() {
  clearTimeout(animate);
}

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    stop(animate);
    return moveRight();
  } else if (e.key === "ArrowLeft") {
    stop(animate);
    return moveLeft();
  } else if (e.key === "ArrowDown") {
    stop(animate);
    return moveDown();
  } else if (e.key === "ArrowUp") {
    stop(animate);
    return moveUp();
  }
});

window.onload = init;
