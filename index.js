//document.getElementById("count").innerText = 0

let countEl = document.getElementById("count-el")
let saveed = document.getElementById("save")

let count = 0

function increment( ){
    count += 1
    countEl.innerText = count
    console.log(count)
} 

function save() {
    saveed.innerText = "saved"
    console.log(saveed)
}