const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", size);
function size(e) {
  text.style.fontSize = `${e.target.value}px`;
}