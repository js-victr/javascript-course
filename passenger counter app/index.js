// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflet the new count 
let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count-el") // passing argument in ()

console.log(saveEl);

function increment() {
    count += 1
    countEl.textContent = count 
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}