class User {
  constructor(id, name, home_coordinates) {
    (this.id = id),
      (this.name = name),
      (this.home_coordinates = home_coordinates);
  }

  static getAllUsers() {
    API.get("/users").then(users => {
      console.log(users);
      User.createUserObject(users);
    });
  }

  static createUserObject(users) {
    users.forEach(user => {
      let newUser = new User(user.id, user.name, user.home_coordinates);
      console.log(newUser);
      newUser.renderUser();
    });
  }

  renderUser() {
    const userDropdown = document.getElementById("user-dropdown");
    const option = document.createElement("option");
    option.value = this.id;
    option.text = this.name;
    userDropdown.appendChild(option);
  }

  createUser(params) {
    const name = document.getElementById("name").value;
    const home = document.getElementById("home").value;
    API.post("/users", params).then(data => {});
  }
}
