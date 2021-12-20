//Create a webpage with a 16x16 grid of square divs.
//Dimensions and flow are handled in CSS.

var body = document.querySelector('body');
var gridSize = 16;
var gridDim = 960;
var pClassName = 'pixel'




var container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

var columns = [];
var pixels = [];
var pixel

function clearElements(elementClass) {
    var toClear = document.getElementsByClassName(elementClass);
    [...toClear].forEach((cleared) => {
        cleared.remove();        
    });
}

function drawGrid(gridSize) {
    for (i=1; i <= gridSize; i++) {
        columns[i] = document.createElement('div')
        columns[i].id = "c" + i;
        columns[i].className = 'column';
        // columns[i].witdth = pixelDim;
        for (j = 1; j <= gridSize; j++) {
            pixels[[i,j]] = document.createElement('div');
            pixels[[i,j]].id = "c" + i + "p" + j;
            pixels[[i,j]].className = 'pixel';
            pixel = pixels[[i,j]];
            // pixels[[i,j]].witdth = pixelDim;
            pixel.addEventListener('mouseover', function() {
            // pixels[[i,j]].addEventListener('mouseover', function(pixel) {
                // pClassName = 'hover' + this.id;
                // this.Color = Math.floor(Math.random()*16777215).toString(16);
                // this.className = pClassName;
                // newButton.style = "margin-right: 4px"; 
                // pixels[[i,j]].className = 'pixelHover';
                this.classList.add('pixelHover');
            });
            columns[i].appendChild(pixels[[i,j]]);
        }
        container.appendChild(columns[i]);
    }
}



/*Add a button to the top of the screen which will clear the current 
grid and send the user a popup asking for the number of squares per
side for the new grid.*/
var button = document.createElement('button');
button.textContent = 'Shake the Etch-a-Sketch';
button.width = gridDim + 'px'
button.addEventListener('click', function() {
    // var dummy = document.getElementsByClassName('pixel');
    // [...dummy].forEach((pixel) => {
    //     // console.log(pixel);
    //     pixel.className = "pixel";        
    // });
    buttonWork();
});
body.insertBefore(button, body.firstChild)

function buttonWork() {
    gridSize = Number(window.prompt("Enter new grid size", gridSize));
    if ( isNaN(gridSize) ) {
        alert("Type a reasonable number chuklehead. ;)");
        buttonWork();
    } else if (gridSize >= 100) {
        alert("Too beacoup Monsieur, Too beacoup!")
        buttonWork();
    } else {
        clearElements('pixel');
        clearElements('column');
        drawGrid(gridSize);
    }
    
}
drawGrid(gridSize);