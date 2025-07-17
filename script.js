const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetButton");
let value = 16

generateGrid(value);
function generateGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.width = `calc(100%/${size})`;
        container.appendChild(div);
        const darkbg = document.createElement("div")
        darkbg.classList.add("darkbg")
        div.appendChild(darkbg)
        div.onmouseover = () => {
            div.style.backgroundColor = randomRGB();
            current_opacity = parseFloat(darkbg.style.opacity) || 0;
            darkbg.style.opacity = Math.min((current_opacity + 0.1), 1).toString()
            console.log(darkbg.style.opacity)
            // if (darkbg.style.opacity <= "100%") {
            // }
        };
    };
}
function resetGrid() {
    container.innerHTML = "";
    generateGrid(value)
}

sizeButton.onclick = () => {
    value = prompt("Please enter the desired number of squares per side");
    if (value > 100) {
        value = prompt("The maximum canvas size is 100x100 squares. \nPlease enter a smaller size.");
    } else {
        resetGrid();
        generateGrid(value);
    }
};

resetButton.onclick = () => resetGrid();


function randomRGBValue() {
    return Math.floor(Math.random() * 256)
}

function randomRGB() {
    return `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`
}
