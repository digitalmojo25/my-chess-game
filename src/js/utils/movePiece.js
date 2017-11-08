import state from '../state';

function movePiece (board, vector, captured) {
    console.log('movePiece()', captured)
    if (!board[vector.x] || !board[vector.x][vector.y]) return;
    
    const x = vector.x;
    const y = vector.y;
    const px = state.currPiece.x;
    const py = state.currPiece.y;
    state.previousPos = { ...state.currPiece };
    
    // const emptySpace = board[x][y].children[0].cloneNode();
    const emptySpace = document.createElement('div');
    emptySpace.classList.add('chess-piece');
    emptySpace.setAttribute('id', 'empty');
    
    board[x][y].removeChild(board[x][y].children[0]);
    board[x][y].appendChild(board[px][py].children[0]);
    
    if (captured) {
        board[px][py].appendChild(state.captured);
        // state.captured = ''; // comment out for capture to work
    } else {
        board[px][py].appendChild(emptySpace);
    }
    
    state.currPiece = '';
    
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            board[x][y].classList
            .remove(
                'moves-wht',
                'moves-blk',
                'attack-wht',
                'attack-blk'
            );
        });
    });
}

export default movePiece;
