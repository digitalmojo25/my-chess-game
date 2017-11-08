import state from '../state';

function checkKing (checkMoves, board, player) {
    let king = null;
    let check = false;
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            if (board[x][y].children[0].id.includes(`${player}-king`)) {
                king = { x: x, y: y };
            }
        });
    });
    
    checkMoves.forEach((v) => {
        if (v.x === king.x && v.y === king.y) {
            console.log(player + ' king is in Check!')
            check = true;
            // state.currPiece = { x: king.x, y: king.y };
        }
    });
    return check;
}

export default checkKing;