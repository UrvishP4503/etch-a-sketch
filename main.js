const rangeInput = document.getElementById(`customRange`);
const sizeOfGrid = document.getElementById(`size`);
const resetButton = document.getElementById(`reload`);

let size = 72;
sizeOfGrid.innerText = size;

rangeInput.addEventListener(`input`, () => {
    size = parseInt(rangeInput.value);
    sizeOfGrid.innerText = size;
});

resetButton.addEventListener(`click`, () =>{
    location.reload();
});
