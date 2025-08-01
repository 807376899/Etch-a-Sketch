let container=document.querySelector('.container');
let gridSize=16;
createGrid(gridSize);
let cells=document.querySelectorAll('.cell');
let resetButton=document.getElementById('reset');
let sizeButton=document.getElementById('size');
sketch();

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

function sketch() {
    
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomColor();
            const hovered= document.querySelectorAll('.hovered');
            hovered.forEach(h => h.style.backgroundColor=darkenColor(h.style.backgroundColor));
            cell.classList.add('hovered');
        });
    });
}
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
    sketch()
}
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function progressiveDarkening() {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            let newColor = darkenColor(currentColor);

            cell.style.backgroundColor = newColor;
            currentColor = newColor;
        });
    });
}
function darkenColor(rgbColor) {
    let color = rgbColor.match(/\d+/g);
    if (color) {
        color = color.map(c => Math.max(0, c - 20));
        return `rgb(${color.join(',')})`;
    }
    return rgbColor; // Return original if no match
}
function isDark(){

}