
let container = document.querySelector('#container')


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
button.addEventListener("click", buttonClick)
let inputVal = prompt("How many numbers")



function buttonClick(inputVal) {
    container.style.gridTemplateRows = `repeat(${inputVal} , 1fr)`;
    container.style.gridTemplateColumns = `repeat(${inputVal} , 1fr)`;
}
size()
buttonClick(inputVal)









