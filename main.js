function sketchSquare() {
    const squares = document.querySelectorAll('.square');
    console.log(squares);
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.classList.add('sketched-square');
    }));
}


// create a grid using givens rows and columsn params
function createGrid(gridSize) {
    const container = document.querySelector('.container');
    console.log(container);

    //for each row create a square div for that row
    for(let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        //console.log(row);
        row.classList.add('row');
        for(let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    sketchSquare();
}