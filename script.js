let container = document.getElementById("container")
let gridItem = document.getElementsByClassName("grid-item")

function resetGrid(){
    for (let item of gridItem) {
        item.style.backgroundColor = "white";
    }
}

function deleteGrid(){
    container.replaceChildren()
}

function newGrid(){
    deleteGrid()
    let size = parseInt(prompt("Enter the size of the new grid"))
    createGrid(size, size)
}

let resetButton = document.createElement("button")
resetButton.innerText = "Reset"
resetButton.addEventListener("click", resetGrid)
document.body.append(resetButton)

let newGridButton = document.createElement("button")
newGridButton.innerText = "New Grid"
newGridButton.addEventListener("click", newGrid)
document.body.append(newGridButton)


function createGrid(rows, columns){
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for(let i = 0; i < rows * columns; i++){
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        container.append(gridItem)

        gridItem.addEventListener("click", function(){
            gridItem.style.backgroundColor = "red"
        })
    }
}

createGrid(16, 16)