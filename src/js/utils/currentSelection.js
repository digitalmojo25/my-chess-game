import state from '../state';
import movePiece from './movePiece';
import validateMove from './validateMove';

function currentSelection (board, vector) {
    console.log('currentSelection', state)
    if (state.moved) return;
    
    const x = vector.x;
    const y = vector.y;
    state.currSelect = vector;
    
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            board[x][y].classList.remove('selected-blk', 'selected-wht');
        });
    });
    
    if (board[x][y].classList.contains('black-space')) {
        board[x][y].classList.add('selected-blk');
    } else {
        board[x][y].classList.add('selected-wht');
    }
    
    // check to see if space is empty
    if (state.currPiece && board[x][y].children[0].id === 'empty') {
        const validate = validateMove(state.currPiece, board);
        if (!validate) return;
        movePiece(board, vector);
        state.moved = true;
    }
    
    // take enemy piece
    if (state.currPiece && !board[x][y].children[0].id.includes(state.currTurn)) {
        const validate = validateMove(state.currPiece, board);
        if (!validate) return;
        
        state.captured = board[vector.x][vector.y].children[0];
        movePiece(board, vector);
        state.moved = true;
    }
    
    // check to see if piece is the color of state.currTurn
    // preventing moving of other players pieces
    if (!board[x][y].children[0].id.includes(state.currTurn)) {
        return;
    }
    
    // check to see if space has a piece
    if (board[x][y].children[0].id !== 'empty') {
        state.currPiece = vector;
    }
    
    console.log(state)
}

export default currentSelection;
