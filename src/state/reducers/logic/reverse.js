import setAllowedCells from './set-allowed-cells';

const getScore = (player, board) => {
            var score = 0;
            
            board.forEach(row=>{
                row.forEach(cell=>{
                    if (cell.disk===player) score++;
                });
            })
            
            return score;
}

const reverse = (state, x, y) => { 
            
    var b = state.board;
    var originalPlayer = state.currentPlayer;
    
    if (!b[x][y].canReverse || !b[x][y].canReverse.length) return;
    
    b[x][y].disk = state.currentPlayer;
    b[x][y].canReverse.forEach(cell => b[cell.X][cell.Y].disk = state.currentPlayer);

    var score = state.score; 
    score.white = getScore('white', b);
    score.black = getScore('black', b);
    
    var currentPlayer = state.currentPlayer==='white'?'black':'white';    
    var board = setAllowedCells(b, currentPlayer);

    if (!board.allowedCellsCount) { // No moves possible

        currentPlayer = currentPlayer==='white'?'black':'white';
        board = setAllowedCells(b, currentPlayer); // check if the other player has any moves
        if (!board.allowedCellsCount) { // if both players don't have any moves the game is over
          
        return false;
        }
    }    

    return {
        board:board.board,
        allowedCellsCount:board.allowedCellsCount,
        newestDisk:[x,y],
        currentPlayer,
        lostTurn:currentPlayer===originalPlayer,
        score
    }
    
}

export default reverse;