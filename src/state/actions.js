import {ACTIONS} from '../consts'

export const restart = () => ({
    type: ACTIONS.RESTART
})

export const reverse = (position) => ({
    type:ACTIONS.REVERSE,
    x:position[0], 
    y:position[1]
})

export const toggleHoverState = (position, hovered) => ({
    type:ACTIONS.TOGGLE_CELL_HOVER,
    hovered,
    x:position[0], 
    y:position[1]
})
