class User {
  constructor(id, name, home_coordinates) {
    (this.id = id),
      (this.name = name),
      (this.home_coordinates = home_coordinates);
  }

  static getAllUsers() {
    API.get("/users").then(users => {
      console.log(users);
      User.createUsers(users);
    });
  }

  static createUsers(users) {
    users.forEach(user => {
      let newUser = new User(user.id, user.name, user.home_coordinates);
      console.log(newUser);
      User.renderUser(newUser);
    });
  }

  static renderUser(newUser) {
    const userDropdown = document.getElementById("user-dropdown");
    const option = document.createElement("option");
    option.value = newUser.id;
    option.text = newUser.name;
    userDropdown.appendChild(option);
  }
}
