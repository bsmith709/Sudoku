document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("sudoku-grid");

    // Create 9x9 grid
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.maxLength = "1";
        grid.appendChild(cell);
    }

    grid.addEventListener("input", (e) => {
        const cell = e.target;
        if(isNaN(parseInt(cell.value)) || cell.value == 0) {
            cell.value = "";
        }
    });

    document.getElementById("generate-puzzle").addEventListener("click", () => {
        alert("Puzzle generation logic goes here!");
    });

    document.getElementById("solve-puzzle").addEventListener("click", () => {
        alert("Solver logic goes here!");
    });
});