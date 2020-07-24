User.getAllUsers();

const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", e => {
  e.preventDefault();
  User.createUser();
});
