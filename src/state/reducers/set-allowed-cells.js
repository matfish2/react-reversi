import { BOARD_DIMENSIONS, DIRECTIONS } from '../../consts.js'

const canReverse = (b, x, y, currentPlayer) => {
            
    var canReverse = [];
    var X,Y, distance, cells;
    
    // cell is already occupied
    if (b[x][y].disk) return [];
    
    DIRECTIONS.forEach(dir=>{
        
        distance = 0;
        X = x;
        Y = y;
        cells = [];
        
        do {
            X+= dir[0];
            Y+= dir[1];
            cells.push({X,Y});    
            distance++;
        } while (inBoard(X,Y) && hasOpponentsColor(b[X][Y], currentPlayer));
        
        if (distance >=2 && inBoard(X,Y) && b[X][Y].disk===currentPlayer) {
            canReverse.push(cells);
        }
    });
    
    return [].concat.apply([], canReverse);
    
}

const inBoard = (x, y) => {
    return x>=0 && x<BOARD_DIMENSIONS && y>=0 && y<BOARD_DIMENSIONS;
}

const hasOpponentsColor = (cell, currentPlayer) => {
    return cell.disk===opponent(currentPlayer);
}

const opponent = (currentPlayer) => {
    return currentPlayer==='white'?'black':'white';
}

export default (board, currentPlayer) => {
       
        var allowedCellsCount = 0;
        
        for (let x=0; x<BOARD_DIMENSIONS;x++) {
            for (let y=0; y<BOARD_DIMENSIONS; y++) {
                board[x][y].canReverse = canReverse(board, x, y, currentPlayer); 
                if (board[x][y].canReverse.length) allowedCellsCount++;
            }
        }
                
        return {board, allowedCellsCount};
    }