
let container = document.querySelector('#container')

let inputVal = 16
function size() {

    for(let i = 0; i < inputVal * inputVal; i++) {
        let square = document.createElement('div')
        square.addEventListener("mouseover", mouseover)
        square.classList.add('square')
        container.appendChild(square)

        function mouseover() {
            square.style.backgroundColor = "red"
        }
    }
}
const button = document.querySelector('button')
function defaultGrid() {
    let inputVal = 16
    container.style.gridTemplateRows = `repeat(${inputVal} , 1fr)`;
    container.style.gridTemplateColumns = `repeat(${inputVal} , 1fr)`;
}
size()
defaultGrid()
button.onclick = function() {
    
    inputVal = prompt("square per row")
    if(inputVal >= 100) {
        alert("Enter a number less then 100")
    } else {
        container.innerHTML = '';
        size()
        container.style.gridTemplateRows = `repeat(${inputVal} , 1fr)`;
        container.style.gridTemplateColumns = `repeat(${inputVal} , 1fr)`;
    }
}








