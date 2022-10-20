const reduce = document.querySelector("button[data-action='decrement']");
const add = document.querySelector("button[data-action='increment']");
const countValue = document.querySelector('#value');

let counterValue = 0;

const countReduce = function () {
  counterValue -= 1;
  countValue.textContent = counterValue;
};

const countAdd = function () {
  counterValue += 1;
  countValue.textContent = counterValue;
};

reduce.addEventListener('click', countReduce);
add.addEventListener('click', countAdd);