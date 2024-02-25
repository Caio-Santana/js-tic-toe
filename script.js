'use strict';

const padList = document.querySelectorAll('.pad');

let currentPlayer = 0;
let arr = new Array(9);
const score = [0, 0];

padList.forEach((pad) => {
  pad.addEventListener('click', doMark);
});

function doMark() {
  const imgEl = document.createElement('img');
  imgEl.src = `./assets/${currentPlayer === 0 ? 'o' : 'x'}.svg`;
  this.append(imgEl);
  const index = Number(this.id);
  arr[index] = currentPlayer;
  this.removeEventListener('click', doMark);
  checkForWinner();
  currentPlayer = currentPlayer === 0 ? 1 : 0;
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
  }
}
