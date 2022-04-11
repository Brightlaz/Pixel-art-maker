// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

// Select Table
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    reset();
    makeGrid();
})


/**
 * @description To append the tr and td to the table
 * @returns grid()
 */
function makeGrid() {
    /**
     * @description To create tr and td according to the widht and height
     * @returns table
     */
    function grid() {
        for (let y = 0; y < height.value; y++) {
            let tr = document.createElement("tr");
            for (let x = 0; x < width.value; x++) {
                let td = document.createElement("td");
                tr.appendChild(td);
                td.addEventListener('click', function() {
                    td.style.backgroundColor = color.value;
                })
            }
            table.appendChild(tr);
        }

    }
    return grid()
}

function reset() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}