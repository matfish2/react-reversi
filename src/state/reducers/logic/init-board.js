import setAllowedCells from './set-allowed-cells';
import { BOARD_DIMENSIONS } from '../../../consts.js'

/** create the initial board state */
  const initBoard = (currentPlayer) => {
    let board = new Array(BOARD_DIMENSIONS);
    let rowPos;
    
    for(let x = 0; x < board.length;x++) {
        board[x] = new Array(BOARD_DIMENSIONS);
        rowPos = x * BOARD_DIMENSIONS;
        for (let y = 0; y < board[x].length; y++) {
            
            board[x][y] = {
                id: rowPos + (y+1),
                disk: initialDisk(x+1, y+1),
                canReverse:[],
                hovered:false
            };
        }
    }
    
    return setAllowedCells(board, currentPlayer);
}

/** set initial disks black: black at 4,4;5,5; white at 4,5; 5,4; */
const initialDisk = (x, y) => {
    var HALF = BOARD_DIMENSIONS / 2;
    if ((x===HALF && y===HALF) || (x===HALF+1 && y===HALF+1)) return 'black';
    if ((x===HALF && y===HALF+1) || (x===HALF+1 && y===HALF)) return 'white';
    return null;
}

export default initBoard;