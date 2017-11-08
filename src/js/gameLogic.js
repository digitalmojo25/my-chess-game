import state from './state';
import moves from './moves';
import movePiece from './utils/movePiece';

const cancelBtn = document.querySelector('.cancel');
const confirmBtn = document.querySelector('.confirm');
const turn = document.querySelector('.turn');

function gameLogic (vector, board) {
    const space = board[vector.x][vector.y];
    // console.log(moves(space, board));
    
    switch(state.currTurn) {
        case 'wht':
            
            cancelBtn.onclick = function() {
                if (!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured);
                state.moved = false;
                state.currPiece = '';
                state.captured = ''; // add for canceling a captured piece
            }
            
            confirmBtn.onclick = function() {
                if (!state.moved) return;
                state.currTurn = 'blk';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
                state.captured = '';
                turn.innerHTML = 'Turn: Black';
            }
            
            break;
        case 'blk':
            
            cancelBtn.onclick = function() {
                if (!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured);
                state.moved = false;
                state.currPiece = '';
                state.captured = ''; // add for canceling a captured piece
            }
            
            confirmBtn.onclick = function() {
                if (!state.moved) return;
                state.currTurn = 'wht';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
                state.captured = '';
                turn.innerHTML = 'Turn: White';
            }
            
            break;
        default:
            break
    }
}

export default gameLogic;
