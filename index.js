let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);
let count = 0;

function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function save() {
  let contains = count + " - ";
  saveEl.textContent += contains;
  count = 0;
  document.getElementById("count-el").innerText = count;
}
