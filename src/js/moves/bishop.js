function bishopMoves (vector, board) {
    // console.log('queen moves', vector, board);
    
    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk';
    // debugger;
    
    const moves = [];
    
    // northeast
    const ne = { ...vector };
    for(let i = 0;i < 8;i++) {
        ne.x += 1;
        ne.y += 1;
        
        if (!board[ne.x] || !board[ne.x][ne.y]) break;
        
        const space = board[ne.x][ne.y];
        
        if (space.children[0].id === 'empty') {
            if (space.classList.contains('white-space')) {
                space.classList.add('moves-wht');
            } else {
                space.classList.add('moves-blk');
            }
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                if (space.classList.contains('white-space')) {
                    space.classList.add('attack-wht');
                } else {
                    space.classList.add('attack-blk');
                }
                moves.push({ x: ne.x, y: ne.y });
                break;
            }
        }
        moves.push({ x: ne.x, y: ne.y });
    }
    
    // southeast
    const se = { ...vector };
    for(let i = 0;i < 8;i++) {
        se.x -= 1;
        se.y += 1;
        
        if (!board[se.x] || !board[se.x][se.y]) break;
        
        const space = board[se.x][se.y];
        
        if (space.children[0].id === 'empty') {
            if (space.classList.contains('white-space')) {
                space.classList.add('moves-wht');
            } else {
                space.classList.add('moves-blk');
            }
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                if (space.classList.contains('white-space')) {
                    space.classList.add('attack-wht');
                } else {
                    space.classList.add('attack-blk');
                }
                moves.push({ x: se.x, y: se.y });
                break;
            }
        }
        moves.push({ x: se.x, y: se.y });
    }
    
    // southwest
    const sw = { ...vector };
    for(let i = 0;i < 8;i++) {
        sw.x -= 1;
        sw.y -= 1;
        
        if (!board[sw.x] || !board[sw.x][sw.y]) break;
        
        const space = board[sw.x][sw.y];
        
        if (space.children[0].id === 'empty') {
            if (space.classList.contains('white-space')) {
                space.classList.add('moves-wht');
            } else {
                space.classList.add('moves-blk');
            }
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                if (space.classList.contains('white-space')) {
                    space.classList.add('attack-wht');
                } else {
                    space.classList.add('attack-blk');
                }
                moves.push({ x: sw.x, y: sw.y });
                break;
            }
        }
        moves.push({ x: sw.x, y: sw.y });
    }
    
    // northwest
    const nw = { ...vector };
    for(let i = 0;i < 8;i++) {
        nw.x += 1;
        nw.y -= 1;
        
        if (!board[nw.x] || !board[nw.x][nw.y]) break;
        
        const space = board[nw.x][nw.y];
        
        if (space.children[0].id === 'empty') {
            if (space.classList.contains('white-space')) {
                space.classList.add('moves-wht');
            } else {
                space.classList.add('moves-blk');
            }
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                if (space.classList.contains('white-space')) {
                    space.classList.add('attack-wht');
                } else {
                    space.classList.add('attack-blk');
                }
                moves.push({ x: nw.x, y: nw.y });
                break;
            }
        }
        moves.push({ x: nw.x, y: nw.y });
    }
    
    return moves;
}

export default bishopMoves;