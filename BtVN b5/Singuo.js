const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;

const signUp = new SignUp(name, email, password, confirmPassword);
signUp.handleSignUp();