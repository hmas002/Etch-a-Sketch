// create a grid using givens rows and columsn params
function createGrid(rows, columns) {
    const container = document.querySelector('.container');
    console.log(container);

    //for each row create a square div for that row
    for(let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        //console.log(row);
        row.classList.add('row');
        for(let j = 0; j < columns; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        container.appendChild(row);

    }
}