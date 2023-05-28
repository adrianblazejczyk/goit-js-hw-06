function checkForm(eve) {
  const formData = {
    email: null,
    password: null,
  };

  const {
    elements: { email, password },
  } = eve.currentTarget;

  eve.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("Uzupełnij wszystkie pola!");
  } else {
    formData.email = email.value;
    formData.password = password.value;
    console.log(formData);
    eve.currentTarget.reset();
  }
}

const form = document.querySelector(".login-form");
form.addEventListener("submit", checkForm);
