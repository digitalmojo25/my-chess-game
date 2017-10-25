function queenMoves (vector, board) {
    const piece = board[vector.x][vector.y].children[0];
    const color = piece.id.split('-')[0];
    const enemy = color === 'blk' ? 'wht' : 'blk';
    const moves = [];
    
    function spaceStyle(type, space) {
      if (space.classList.contains(`white-space`)) {
            space.classList.add(`${type}-wht`);
        } else {
            space.classList.add(`${type}-blk`);
        }  
    }
    
    // north
    const n = { ...vector }; // { x: 4, y: 0 }
    for( ; ; ) {
        n.x += 1;
        
        if (!board[n.x]) break;
        
        const space = board[n.x][n.y];
        
        if (space.children[0].id.includes(color)) break;
        
        if (space.children[0].id.includes(enemy)) {
            spaceStyle('attack', space);
            moves.push({ x: n.x, y: n.y });
            break;
        }
        
        if (space.children[0].id === 'empty') {
            spaceStyle('moves', space);
        } 
        
        moves.push({ x: n.x, y: n.y });
    }
    
    // northeast
    const ne = { ...vector };
    for( ; ; ) {
        ne.x += 1;
        ne.y += 1;
        
        if (!board[ne.x] || !board[ne.x][ne.y]) break;
        
        const space = board[ne.x][ne.y];
        
        if (space.children[0].id.includes(color)) break;
        
        if (space.children[0].id.includes(enemy)) {
            spaceStyle('attack', space);
            moves.push({ x: ne.x, y: ne.y });
            break;
        }
            
        if (space.children[0].id === 'empty') {
            spaceStyle('moves', space);
        }
        
        moves.push({ x: ne.x, y: ne.y });
    }
    
    // east
    const e = { ...vector };
    for( ; ; ) {
        e.y++;
        
        if (!board[e.x][e.y]) break;
        
        const space = board[e.x][e.y];
        
        if (space.children[0].id === 'empty') {
            spaceStyle('moves', space);
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                spaceStyle('attack', space);
                moves.push({ x: e.x, y: e.y });
                break;
            }
        }
        moves.push({ x: e.x, y: e.y });
    }
    
    // southeast
    const se = { ...vector };
    for( ; ; ) {
        se.x -= 1;
        se.y += 1;
        
        if (!board[se.x] || !board[se.x][se.y]) break;
        
        const space = board[se.x][se.y];
        
        if (space.children[0].id === 'empty') {
            spaceStyle('moves', space);
        } else {
            if (space.children[0].id.includes(color)) {
                break;
            } else {
                spaceStyle('attack', space);
                moves.push({ x: se.x, y: se.y });
                break;
            }
        }
        moves.push({ x: se.x, y: se.y });
    }
    
    // south
    const s = { ...vector };
    for( ; ; ) {
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
    
    // southwest
    const sw = { ...vector };
    for( ; ; ) {
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
    
    // west
    const w = { ...vector };
    for( ; ; ) {
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
    
    // northwest
    const nw = { ...vector };
    for( ; ; ) {
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

export default queenMoves;