const inputFieldEl = document.getElementById("input-field");
const addBtnEl = document.getElementById("add-button");

addBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    console.log(inputValue);
})