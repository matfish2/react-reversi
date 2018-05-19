import initBoard from './init-board'
import reverse from './reverse'

var board = initBoard('white');

var initialState = {
    status:'active',
    winner:null, 
    score:{
        white:2,
        black:2
    },
    currentPlayer:'white',
    board:board.board,
    allowedCellsCount:board.allowedCellsCount
} 

var game = (state = initialState, action) => {
  switch (action.type) {
    case 'RESTART_GAME':
      return initialState
    case 'REVERSE':
      state = JSON.parse(JSON.stringify(state));
      const data = reverse(state, action.x, action.y);

      if (data===false) {
          return {
              ...state, status:'over'
          }
      }

      return {...state, ...data}
    case 'TOGGLE_CELL_HOVER':
    var board = JSON.parse(JSON.stringify(state.board));  
    var cell = board[action.x][action.y];
    cell.hovered = !cell.hovered;
    board[action.x][action.y] = cell;
    
return {...state, board}
    default:
      return state
  }
}

export default game
