import Board from './board';
import Game from './game';

const gamesBoard = new Board(4);
gamesBoard.drawBoard();
const game = new Game(gamesBoard);
game.init();