

function initPiece (vector, piece, board) {
    
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            if(vector.x === x && vector.y === y) {
                board[x][y].removeChild(board[x][y].children[0]);
                board[x][y].appendChild(piece);
            }
        })
    })
    
        
}

export default initPiece;
