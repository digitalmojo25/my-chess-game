import state from '../state';
import moves from '../moves';

function validateMove(vector, board) {
    const space = board[vector.x][vector.y];
    const movesArray = moves(space, board);
    const cv = state.currSelect;
    let found = false;
    
    movesArray.forEach((v) => {
        if (v.x === Number(cv.x) && v.y === Number(cv.y)) {
            found = true;
        }
    });
    
    return found;
}

export default validateMove;