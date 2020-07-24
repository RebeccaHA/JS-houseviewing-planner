class User {
  constructor(name, home_coordinates) {
    (this.name = name), (this.home_coordinates = home_coordinates);
  }

  static getAllUsers() {
    API.get("/users").then(user => {
      console.log(user);
    });
  }
}
