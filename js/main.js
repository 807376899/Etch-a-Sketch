let container=document.querySelector('.container');
let gridSize=16;
createGrid(gridSize);
let cells=document.querySelectorAll('.cell');
let resetButton=document.getElementById('reset');
let sizeButton=document.getElementById('size');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});
resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});
sizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (1-100):");
    if (newSize >= 1 && newSize <= 100) {
        gridSize = newSize;
        resetGrid();
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});

function createGrid(size) {
    for(i=0;i<size;i++){
        let row=document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(j=0;j<size;j++){
            let cell=document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}
function resetGrid() {
    container.remove();
    container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    createGrid(gridSize);
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}