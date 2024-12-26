document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("sudoku-grid");

    // Create 9x9 grid
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.maxLength = "1";
        grid.appendChild(cell);
    }

    document.getElementById("generate-puzzle").addEventListener("click", () => {
        alert("Puzzle generation logic goes here!");
    });

    document.getElementById("solve-puzzle").addEventListener("click", () => {
        alert("Solver logic goes here!");
    });
});