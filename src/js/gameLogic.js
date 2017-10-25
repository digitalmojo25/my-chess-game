import state from './state';
import moves from './moves';
import movePiece from './utils/movePiece';

const cancelBtn = document.querySelector('.cancel');
const moveBtn = document.querySelector('.move');

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
            }
            
            moveBtn.onclick = function() {
                if (!state.moved) return;
                state.currTurn = 'blk';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
            }
            
            break;
        case 'blk':
            
            cancelBtn.onclick = function() {
                if (!state.currPiece) return;
                movePiece(board, state.previousPos, state.captured);
                state.moved = false;
                state.currPiece = '';
            }
            
            moveBtn.onclick = function() {
                if (!state.moved) return;
                state.currTurn = 'wht';
                state.moved = false;
                state.currPiece = '';
                state.previousPos = '';
            }
            
            break;
        default:
            break
    }
}

export default gameLogic;
