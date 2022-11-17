
const loginForm = document.querySelector(".login-form");

const submitHandler = e => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    console.log( { email: email.value, password: password.value } );
    e.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", submitHandler);