import queenMoves from './queen';
import kingMoves from './king';
import rookMoves from './rook';
import bishopMoves from './bishop';
import horseMoves from './horse';
import pawnMoves from './pawn';

// NOTE: king argument is for pawn moves

function moves (space, board, king) {
    // console.log('moves', space);
    const vector = {};
    vector.x = Number(space.id.split(',')[0]);
    vector.y = Number(space.id.split(',')[1]);
    
    let piece = space.children[0].id;
    piece = piece.split('-')[1];
    
    let moves = null;
    
    switch(piece) {
        case 'pawn':
            moves = pawnMoves(vector, board, king);
            break;
        case 'rook':
            moves = rookMoves(vector, board);
            break;
        case 'horse':
            moves = horseMoves(vector, board);
            break;
        case 'bishop':
            moves = bishopMoves(vector, board);
            break;
        case 'queen':
            moves = queenMoves(vector, board);
            break;
        case 'king':
            moves = kingMoves(vector, board);
            break;    
        default: // empty space
            break;
    }
    return moves;
}

export default moves;