let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

let saveEl = document.getElementById("save-el")

function save(){
    saveEl.innerText = "saved"
}