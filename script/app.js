const container = document.querySelector(".container")
const range = document.querySelector(".range")
const colorChooser = document.getElementById("color-chooser")
const clearBtn = document.querySelector(".clear-btn")
const eraserBtn = document.querySelector(".eraser")
let value = document.getElementById("value")
let cell



value.textContent = range.value
range.addEventListener("input",()=>{
    value.textContent = range.value
    container.innerHTML = ""
    createGrid(range.value,range.value)
    drawGrid()
})


// ---------CREATE GRID -----------
function createGrid(rows,columns){
    container.style.gridTemplateRows = `repeat(${rows},1fr)`
    container.style.gridTemplateColumns = `repeat(${columns},1fr)`
    for(let row = 0; row<rows; row++){
        let createRow = document.createElement("div")
        container.appendChild(createRow).classList.add("cell-row","cell")
    
        for(let column = 1; column < columns; column++){
            let createColumn = document.createElement("div")
            container.appendChild(createColumn).classList.add("cell-column","cell")
        }
    }
}

// ----------DRAW GRID-------------
function drawGrid(){
    let mouseDown = false
    cell = container.querySelectorAll(".cell")
  
    container.addEventListener("click",()=>{
        if (mouseDown){
            mouseDown = false
        } else{
            mouseDown = true
        }
    })
    
    cell.forEach((div)=>{
        div.addEventListener("mouseleave",()=> {
            if(!mouseDown) return
            
            if(eraserToggle){
                div.style.backgroundColor = "white"
            }else{
                div.style.backgroundColor = colorChooser.value
            }
            
        })
       
    })
}




// ---------ADD GRID--------
createGrid(range.value,range.value)
drawGrid()

// -------CLEAR GRID---------
clearBtn.addEventListener("click",()=> {
    cell.forEach((div)=>{
        div.style.backgroundColor = "white"
    })
    
})

// -------ERASER---------
let eraserToggle = false
eraserBtn.addEventListener("click", (e)=>{
    if(eraserToggle){
        e.currentTarget.style.backgroundColor = "#1D3557"
        eraserToggle = false
    }else{
        e.currentTarget.style.backgroundColor = "black"
        
        eraserToggle = true
       
    }
    
})












