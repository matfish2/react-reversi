import initBoard from './logic/init-board'

var board = initBoard('white');

export default {
    status:'active',
    winner:null, 
    score:{
        white:2,
        black:2
    },
    currentPlayer:'white',
    lostTurn:false,
    board:board.board,
    allowedCellsCount:board.allowedCellsCount
} 