function rookMoves (vector, board) {
    // console.log('queen moves', vector, board);
    
    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk';
    // debugger;
    
    const moves = [];
    
    // north
    const n = { ...vector };
    for(let i = 0;i < 8;i++) {
        n.x += 1;
        
        if (!board[n.x]) break;
        
        const space = board[n.x][n.y];
        
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
                moves.push({ x: n.x, y: n.y });
                break;
            }
        }
        moves.push({ x: n.x, y: n.y });
    }
    
    // east
    const e = { ...vector };
    for(let i = 0;i < 8;i++) {
        e.y++;
        
        if (!board[e.x][e.y]) break;
        
        const space = board[e.x][e.y];
        
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
                moves.push({ x: e.x, y: e.y });
                break;
            }
        }
        moves.push({ x: e.x, y: e.y });
    }
    
    // south
    const s = { ...vector };
    for(let i = 0;i < 8;i++) {
        s.x -= 1;
        
        if (!board[s.x]) break;
        
        const space = board[s.x][s.y];
        
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
                moves.push({ x: s.x, y: s.y });
                break;
            }
        }
        moves.push({ x: s.x, y: s.y });
    }
    
    // west
    const w = { ...vector };
    for(let i = 0;i < 8;i++) {
        w.y -= 1;
        
        if (!board[w.x][w.y]) break;
        
        const space = board[w.x][w.y];
        
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
                moves.push({ x: w.x, y: w.y });
                break;
            }
        }
        moves.push({ x: w.x, y: w.y });
    }
    
    return moves;
}

export default rookMoves;