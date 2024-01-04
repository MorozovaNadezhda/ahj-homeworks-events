/* eslint no-alert: 0 */
/* eslint class-methods-use-this: 0 */
export default class Game {
  constructor(newBoard) {
    this.indexPrevious = 0;
    this.indexCurrent = 0;
    this.bump = 0;
    this.points = document.getElementById('points');
    this.miss = 0;
    this.newBoard = newBoard;
    this.boardSize = newBoard.boardSize;
    this.interval = 0;
  }

  init() {
    this.newBoard.board.addEventListener('click', (e) => {
      this.clickOnBoard(e);
    });
    this.jumpImg();
  }

  clickOnBoard(event) {
    if (event.target.id !== 'goblin') {
      return;
    }
    this.addPoints();
    this.clearCell(event.target);
  }

  addPoints() {
    if (this.bump < 5) {
      this.miss = 0;
      this.bump += 1;
      this.points.innerHTML = this.bump;
    } else {
      alert('YAY! YOU CAUGHT THE GOBLIN! YOU WON!');
    }
  }

  clearCell(event) {
    const Goblin = event;
    Goblin.parentNode.innerHTML = '';
  }

  jumpImg() {
    this.interval = setInterval(() => {
      this.changePosition();
    }, 1000);
  }

  changePosition() {
    do {
      this.indexCurrent = Math.floor(Math.random() * this.boardSize); // true
    } while (this.indexCurrent === this.indexPrevious); // false
    if (this.indexPrevious >= 0) {
      const oldItemField = document.getElementById(`field${this.indexPrevious}`);
      oldItemField.innerHTML = '';
    }
    const itemField = document.getElementById(`field${this.indexCurrent}`);
    itemField.innerHTML = '<img id = "goblin" src = "./goblin.png">';
    this.indexPrevious = this.indexCurrent;
    this.miss += 1;
    if (this.miss > 5) {
      clearInterval(this.interval);
      alert('Oh NO! THE GOBLIN RUN AWAY! GAME OVER!');
    }
  }
}