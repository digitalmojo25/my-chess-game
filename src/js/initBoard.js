function initBoard () {
    console.log('initBoard');
    const board = document.getElementById('chess-board');
    
    for (let x = 0;x < 8;x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0;y < 8;y++) {
            const space = document.createElement('div');
            if (x % 2 === 0) {
                y % 2 === 0 ?
                space.classList.add('white-space') :
                space.classList.add('black-space');
            } else {
                y % 2 === 0 ? 
                space.classList.add('black-space') :
                space.classList.add('white-space');
            }
            row.appendChild(space);
        }
        board.appendChild(row);
    }
    
}

export default initBoard;
