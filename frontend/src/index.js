User.getAllUsers();

const userForm = document.getElementById("user-form");
const userSelect = document.getElementById("user-dropdown");

userSelect.addEventListener("change", e => {
  let userId = e.target.value;

  User.retrieveUser(userId);
});
userForm.addEventListener("submit", e => {
  e.preventDefault();
  User.createUser();
});
