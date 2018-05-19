export const BOARD_DIMENSIONS = 4;

export const DIRECTIONS = [
    [0,1], // right
    [0,-1], // left
    [-1,0], // up
    [1,0], // down
    [1,1], // diagonal - down right
    [-1, 1], // diagonal - up right                        
    [-1,-1], // diagonal - up left
    [1,-1] // diagonal - down left            
];

export const ACTIONS = {
    RESTART:'RESTART',
    REVERSE:'REVERSE',
    TOGGLE_CELL_HOVER:'TOGGLE_CELL_HOVER'
}
