//document.getElementById("count").innerText = 0

let countEl = document.getElementById("count-el")
let saved = document.getElementById("save-el")
let history = document.getElementById("history")

let count = 0

function increment( ){
    count += 1
    countEl.textContent = count
    console.log(count)
    saved.textContent = "unsaved"
} 

function save() {
    saved.innerText = "saved"
    let countStr = count + " - "
    history.textContent += countStr
    countEl.textContent = 0
    count = 0 
}