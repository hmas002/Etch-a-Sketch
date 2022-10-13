function sketchSquare() {
    const squares = document.querySelectorAll('.square');
    //console.log(squares);
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

const playBtn = document.querySelector('button');
playBtn.addEventListener('click', () => {
    let size = prompt("Please enter grid size between 2-100");

    while(isNaN(size) || size < 2 || size > 100 ) {
        if(!size) return;
        size = prompt("Error! Size must be between 2-100.");
    }
    createGrid(+size);
    resetGrid();
});

function resetGrid() {
    const body = document.querySelector('body');
    const playBtn = document.querySelector('button');
    body.removeChild(playBtn);
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    body.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.textContent = '';
        body.removeChild(resetBtn);
        body.appendChild(playBtn);

    });
}