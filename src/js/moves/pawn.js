import state from '../state';

function pawnMoves (vector, board, king) {
    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk';
    const moves = [];
    
    // direction of moves
    const dir = color === 'blk' ? 1 : -1;
    
    // determine if pawn has moved... 
    let i = 1; // has moved
    let moved = true;
    if (vector.x + dir === 2 && dir === 1) {
        i = 0; // as not moved
        moved = false;
    }
    if (vector.x + dir === 5 && dir === -1) {
        i = 0;
        moved = false;
    }
    
    (function () {
        for (i;i < 2;i++) {
            if (king === 'check') break;
            const firstMoves = { ...vector };
            if (moved) {
                firstMoves.x += (i * dir);
            } else {
                firstMoves.x += ((i + 1) * dir);
            }
            if (!board[firstMoves.x] || !board[firstMoves.x][firstMoves.y]) break;
            const space = board[firstMoves.x][firstMoves.y];
            
            if (space.children[0].id !== 'empty') break;
            if (space.classList.contains('white-space')) {
                space.classList.add('moves-wht');
            } else {
                space.classList.add('moves-blk');
            }
            moves.push(firstMoves);
        }
        
        const lv = { ...vector };
        if (board[lv.x + dir] && board[lv.x + dir][lv.y - 1]) {
            const leftSpace = board[lv.x + dir][lv.y - 1];
            if (leftSpace.children[0].id.includes(enemy)) {
                if (leftSpace.classList.contains('white-space')) {
                    leftSpace.classList.add('attack-wht');
                } else {
                    leftSpace.classList.add('attack-blk');
                }
                moves.push({ x: lv.x + dir, y: lv.y - 1 });
            }
        }
        
        const rv = { ...vector };
        if (board[rv.x + dir] && board[rv.x + dir][rv.y + 1]) {
            const rightSpace = board[rv.x + dir][rv.y + 1];
            if (rightSpace.children[0].id.includes(enemy)) {
                if (rightSpace.classList.contains('white-space')) {
                    rightSpace.classList.add('attack-wht');
                } else {
                    rightSpace.classList.add('attack-blk');
                }
                moves.push({ x: rv.x + dir, y: rv.y + 1 });
            }
        }
    })();
    return moves;
}

export default pawnMoves;


// zachkadish@gmail.com
