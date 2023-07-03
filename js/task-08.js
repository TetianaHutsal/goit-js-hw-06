const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", OnSubmit);

function OnSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if ( email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  }

  const submitObject = {
    email: email.value,
    password: password.value
  }

  console.log(submitObject);
  event.currentTarget.reset();
}

