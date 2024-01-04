/* eslint quotes: 0 */
export default class Board {
  constructor() {
    this.boardSize = 4 * 4;
    this.board = document.getElementById('board');
    this.body = document.querySelector('body');
  }

  drawBoard() {
    const header = document.createElement('h3');
    header.innerHTML = `Points quantity: <span id="points"></span>`;
    this.body.insertBefore(header, this.board);
    // <p>Количество попаданий <span id="points"></span></p>
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${i}`;
      this.board.appendChild(itemBoard);
    }
  }
}