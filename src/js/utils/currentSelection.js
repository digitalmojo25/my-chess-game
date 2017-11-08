import state from '../state';
import movePiece from './movePiece';
import validateMove from './validateMove';
import playerMoves from './playerMoves';
import checkKing from './checkKing';
import checkMate from './checkMate';

function currentSelection (board, vector) {
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
    
    // move into empty space
    if (state.currPiece && board[x][y].children[0].id === 'empty') {
        const validate = validateMove(state.currPiece, board);
        if (!validate) return;
        // const currPiece = state.currPiece;
        movePiece(board, vector);
        
        // check to see if current player has moved into check
        const enemy = state.currTurn === 'wht' ? 'blk' : 'wht';
        const currMoves = playerMoves(board, enemy, 'playerArray');
        const currTurnCheck = checkKing(currMoves, board, state.currTurn);
        if (currTurnCheck) {
            // debugger;
            state.currPiece = state.currSelect;
            movePiece(board, state.previousPos, state.captured);
            state.moved = false;
            state.currPiece = '';
            return;
        }
        
        // check to see if current player has put enemy in check
        const checkMoves = playerMoves(board, state.currTurn, 'playerArray');
        const enemyCheck = checkKing(checkMoves, board, enemy);
        if (enemyCheck) {
            console.log('test enemy check');
            checkMate(board, checkMoves, enemy);
        }
        
        state.moved = true;
    }
    
    // take enemy piece
    if (state.currPiece && !board[x][y].children[0].id.includes(state.currTurn)) {
        const validate = validateMove(state.currPiece, board);
        if (!validate) return;
        state.captured = board[vector.x][vector.y].children[0];
        movePiece(board, vector);
        
        // check to see if current player has moved into check
        const opponent = state.currTurn === 'wht' ? 'blk' : 'wht';
        const checkMoves = playerMoves(board, opponent, 'playerArray');
        const check = checkKing(checkMoves, board, state.currTurn);
        // debugger
        if (check) {
            // debugger;
            state.currPiece = state.currSelect; // add for captured to work
            movePiece(board, state.previousPos, state.captured);
            state.moved = false;
            state.currPiece = '';
            return;
        }
        
        // check to see if current player has put enemy in check
        const attCheckMoves = playerMoves(board, state.currTurn, 'playerArray');
        const attEnemyCheck = checkKing(attCheckMoves, board, opponent);
        if (attEnemyCheck) {
            console.log('test enemy check');
            checkMate(board, attCheckMoves, opponent);
        }
        
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
}

export default currentSelection;
