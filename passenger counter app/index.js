// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflet the new count 
let count = 0
let countEl = document.getElementById("count-el") // passing argument in ()

function increment() {
    count = count + 1
    countEl.innerText = count 
}

function save() {
    console.log(count);
}