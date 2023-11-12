let container = document.getElementById("container")
let gridItem = document.getElementsByClassName("grid-item")
let table = document.getElementById("table")
let slider = document.getElementById("myRange")
let gridSize = document.getElementById("gridSize")
gridSize.innerText = "16"

slider.oninput = function(){
    deleteGrid()
    createGrid(this.value, this.value)
    gridSize.innerText = this.value
}

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
table.append(resetButton)

let newGridButton = document.createElement("button")
newGridButton.innerText = "New Grid"
newGridButton.addEventListener("click", newGrid)
table.append(newGridButton)

let standartButton = document.createElement("button")
standartButton.innerText = "Standart Mode"
standartButton.addEventListener("click", function(){
    isBlack = true
    isEraser = false
})
table.append(standartButton)

let rainbowButton = document.createElement("button")
rainbowButton.innerText = "Rainbow Mode"
rainbowButton.addEventListener("click", function(){
    isBlack = false
    isEraser = false
})
table.append(rainbowButton)

let eraserButton = document.createElement("button")
eraserButton.innerText = "Eraser"
eraserButton.addEventListener("click", function(){
    isEraser = true
})
table.append(eraserButton)

let isBlack = true
let isEraser = false

function getRandomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function createGrid(rows, columns){
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for(let i = 0; i < rows * columns; i++){
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        container.append(gridItem)

        gridItem.addEventListener("click", function(){
            if(!isEraser){
                if(isBlack){
                    gridItem.style.backgroundColor = "black"
                }
                else{
                    gridItem.style.backgroundColor = getRandomColor()
                }
            }
            else{
                gridItem.style.backgroundColor = "white"
            }
        })
    }
}

createGrid(16, 16)