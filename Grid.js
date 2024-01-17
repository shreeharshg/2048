const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid {
#cells
    constructor(gridElement){
        gridElement.style.setProperty('--grid-size', GRID_SIZE);
        gridElement.style.setProperty('--cell-size', `${CELL_SIZE}vmin`);
        gridElement.style.setProperty('--cell-gap', `${CELL_GAP}vmin`);
        this.#cells = createCellElemets(gridElement).map((cellElement, index) => {
            return new cell(cellElement,index % GRID_SIZE, Math.floor(index / GRID_SIZE));
        })
    }

    get #emptyCells(){
        return this.#cells.filter(cell => cell.title == null)
    }

    randomEmptyCell(){
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
        return this.#emptyCells[randomIndex];
}
}


class cell{
#x
#y
#cellElement
#tile

    constructor(cellElement, x, y){
        this.#x = x;
        this.#y = y;
        this.#cellElement = cellElement;
    }   

    get tile(){
        return this.#tile;
    }

    set tile(value){
        this.#tile = value;
        if (value == null){
            return
    }
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
}
}



function createCellElemets(gridElement){
    const cells = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.appendChild(cell);
        cells.push(cell);
    }
    return cells;
}