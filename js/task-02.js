const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = document.querySelector("#ingredients");

const newIngredientsArray = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");

  return list;
});

ingredientsArray.append(...newIngredientsArray);