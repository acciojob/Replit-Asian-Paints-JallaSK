//your JS code here. If required.
const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

const gridItems = document.querySelectorAll(".grid-item");

changeButton.addEventListener("click", () => {
    const id = blockId.value;
    const color = colourId.value;

    gridItems.forEach((item) => {
        item.style.backgroundColor = "transparent";
    });

    const selectedBlock = document.getElementById(id);

    if (selectedBlock && id >= 1 && id <= 9 && CSS.supports("color", color) && color.trim() !== "") {
        selectedBlock.style.backgroundColor = color;
    }
});

resetButton.addEventListener("click", () => {
    gridItems.forEach((item) => {
        item.style.backgroundColor = "transparent";
    });

    blockId.value = "";
    colourId.value = "";
});