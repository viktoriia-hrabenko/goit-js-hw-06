const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", e => {
  nameOutput.textContent = e.currentTarget.value;

  if (e.currentTarget.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  }
});