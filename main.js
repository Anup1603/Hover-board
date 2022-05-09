let container = document.getElementById(`container`)
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


let sqBox = 500
for (let i = 0; i < sqBox; i++) {
    let square = document.createElement(`div`)
    square.classList.add(`square`)

    square.addEventListener(`mouseover`, () => {
        setColorToEl(square)
    })

    square.addEventListener(`mouseout`, () => {
        removeColorEl(square)
    })

    container.appendChild(square)
}



function setColorToEl(element) {
    let color = getRandomColor()
    element.style.background = color

    element.style.boxShadow = `0 0 2px #000`;
}


function removeColorEl(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}