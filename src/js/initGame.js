import state from './state';
import currentSelection from './utils/currentSelection';
import initBoard from './initBoard';
import initPiece from './utils/initPiece';
import * as blk from './blackPieces';
import * as wht from './whitePieces';
import moves from './moves';
import gameLogic from './gameLogic';

function initGame () {
    initBoard();
    
    const DomBoard = document.querySelector('.board');
    const emptyBoard = [[], [], [], [], [], [], [], []];
    
    function mouseoverHandler () {
        // console.log('mouseoverHandler');
        moves(this, board);
    }
    
    function mouseleaveHandler () {
        // console.log('mouseleaveHandler');
        board.forEach((row, x) => {
            row.forEach((space, y) => {
                board[x][y].classList
                .remove(
                    'moves-wht',
                    'moves-blk',
                    'attack-wht',
                    'attack-blk'
                );
            })
        })
    }
    
    function clickHandler () {
        // console.log('clickHandler', this);
        const vector = {};
        vector.x = this.id.split(',')[0];
        vector.y = this.id.split(',')[1];
        currentSelection(board, vector);
        gameLogic(vector, board);
        // console.log(state);
    }
    
    emptyBoard.forEach((row, x) => {
        for(let y = 0;y < 8;y++) {
            const empty = document.createElement('div');
            empty.classList.add('chess-piece');
            empty.setAttribute('id', 'empty');
            const space = DomBoard.children[x].children[y];
            space.appendChild(empty);
            row.push(space);
        }
    })
    
    const board = emptyBoard.reverse();
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            space.setAttribute('id', `${x},${y}`);
            space.addEventListener('mouseover', mouseoverHandler, false);
            space.addEventListener('mouseleave', mouseleaveHandler, false);
            space.addEventListener('click', clickHandler, false);
        })
    })
    
    for(const piece in blk) {
        if (piece == 'king') initPiece({ x:0, y:3 }, blk[piece], board);
        if (piece == 'queen') initPiece({ x:0, y:4 }, blk[piece], board);
        if (piece == 'bishop1') initPiece({ x:0, y:2 }, blk[piece], board);
        if (piece == 'bishop2') initPiece({ x:0, y:5 }, blk[piece], board);
        if (piece == 'horse1') initPiece({ x:0, y:1 }, blk[piece], board);
        if (piece == 'horse2') initPiece({ x:0, y:6 }, blk[piece], board);
        if (piece == 'rook1') initPiece({ x:0, y:0 }, blk[piece], board);
        if (piece == 'rook2') initPiece({ x:0, y:7 }, blk[piece], board);
        if (piece == 'pawn1') initPiece({ x:1, y:0 }, blk[piece], board);
        if (piece == 'pawn2') initPiece({ x:1, y:1 }, blk[piece], board);
        if (piece == 'pawn3') initPiece({ x:1, y:2 }, blk[piece], board);
        if (piece == 'pawn4') initPiece({ x:1, y:3 }, blk[piece], board);
        if (piece == 'pawn5') initPiece({ x:1, y:4 }, blk[piece], board);
        if (piece == 'pawn6') initPiece({ x:1, y:5 }, blk[piece], board);
        if (piece == 'pawn7') initPiece({ x:1, y:6 }, blk[piece], board);
        if (piece == 'pawn8') initPiece({ x:1, y:7 }, blk[piece], board);
    }
    for(const piece in wht) {
        if (piece == 'king') initPiece({ x:7, y:3 }, wht[piece], board);
        if (piece == 'queen') initPiece({ x:7, y:4 }, wht[piece], board);
        if (piece == 'bishop1') initPiece({ x:7, y:2 }, wht[piece], board);
        if (piece == 'bishop2') initPiece({ x:7, y:5 }, wht[piece], board);
        if (piece == 'horse1') initPiece({ x:7, y:1 }, wht[piece], board);
        if (piece == 'horse2') initPiece({ x:7, y:6 }, wht[piece], board);
        if (piece == 'rook1') initPiece({ x:7, y:0 }, wht[piece], board);
        if (piece == 'rook2') initPiece({ x:7, y:7 }, wht[piece], board);
        if (piece == 'pawn1') initPiece({ x:6, y:0 }, wht[piece], board);
        if (piece == 'pawn2') initPiece({ x:6, y:1 }, wht[piece], board);
        if (piece == 'pawn3') initPiece({ x:6, y:2 }, wht[piece], board);
        if (piece == 'pawn4') initPiece({ x:6, y:3 }, wht[piece], board);
        if (piece == 'pawn5') initPiece({ x:6, y:4 }, wht[piece], board);
        if (piece == 'pawn6') initPiece({ x:6, y:5 }, wht[piece], board);
        if (piece == 'pawn7') initPiece({ x:6, y:6 }, wht[piece], board);
        if (piece == 'pawn8') initPiece({ x:6, y:7 }, wht[piece], board);
    }
}

export default initGame;