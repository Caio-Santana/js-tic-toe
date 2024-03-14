'use strict';

const gameboardEl = document.querySelector('.gameboard');

let currentPlayer = 0;
let arr = new Array(9);
const score = [0, 0];

gameboardEl.addEventListener('click', doMark);

function doMark(e) {
  e.preventDefault();

  if (e.target.classList.contains('pad')) {
    const imgEl = document.createElement('img');
    imgEl.src = `./assets/${currentPlayer === 0 ? 'o' : 'x'}.svg`;
    e.target.insertAdjacentElement("afterbegin", imgEl);
    const index = Number(e.target.id);
    arr[index] = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
}

function checkForWinner() {
  if (
    (arr[0] === currentPlayer &&
      arr[1] === currentPlayer &&
      arr[2] === currentPlayer) ||
    (arr[3] === currentPlayer &&
      arr[4] === currentPlayer &&
      arr[5] === currentPlayer) ||
    (arr[6] === currentPlayer &&
      arr[7] === currentPlayer &&
      arr[8] === currentPlayer) ||
    (arr[0] === currentPlayer &&
      arr[3] === currentPlayer &&
      arr[6] === currentPlayer) ||
    (arr[1] === currentPlayer &&
      arr[4] === currentPlayer &&
      arr[7] === currentPlayer) ||
    (arr[2] === currentPlayer &&
      arr[5] === currentPlayer &&
      arr[8] === currentPlayer) ||
    (arr[0] === currentPlayer &&
      arr[4] === currentPlayer &&
      arr[8] === currentPlayer) ||
    (arr[2] === currentPlayer &&
      arr[4] === currentPlayer &&
      arr[6] === currentPlayer)
  ) {
    const scoreEl = document.querySelector(`.score-${currentPlayer}`);
    score[currentPlayer]++;
    scoreEl.textContent = score[currentPlayer];

    gameboardEl.removeEventListener('click', doMark);
  }
}
