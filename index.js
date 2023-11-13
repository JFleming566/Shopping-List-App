import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-8a603-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shopping List")

const inputFieldEl = document.getElementById("input-field");
const addBtnEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");


addBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue)
    appendLi(inputValue)
    clearInputField()
})

function clearInputField () {
    inputFieldEl.value = "";
}

function appendLi(itemValue) {
      shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}