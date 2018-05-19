import reverse from './logic/reverse'
import {ACTIONS} from '../../consts'
import initialState from './initial-state';

var game = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.RESTART:
        
        return initialState
        
        case ACTIONS.REVERSE:
        
        state = JSON.parse(JSON.stringify(state));
        const data = reverse(state, action.x, action.y);
        
        if (data===false) {
            return {
                ...state, status:'over'
            }
        }
        
        return {...state, ...data}
        
        case ACTIONS.TOGGLE_CELL_HOVER:

        var board = JSON.parse(JSON.stringify(state.board));  

        board[action.x][action.y].hovered = action.hovered;
        
        return {...state, board}

        default:
        
        return state
    }
}

export default game
