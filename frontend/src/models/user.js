class User {
  constructor(id, name, home_longitude, home_latitude) {
    (this.id = id),
      (this.name = name),
      (this.home_longitude = home_longitude),
      (this.home_latitude = home_latitude);
  }

  static getAllUsers() {
    API.get("/users").then(users => {
      console.log(users);
      User.createUserObject(users);
    });
  }

  static createUserObject(users) {
    users.forEach(user => {
      let newUser = new User(
        user.id,
        user.name,
        user.home_longitude,
        user.home_latitude
      );
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

  static createUser() {
    const name = document.getElementById("name").value;
    const longitude = document.getElementById("home_longitude").value;
    const latitude = document.getElementById("home_latitude").value;
    let user = {
      name: name,
      home_longitude: longitude,
      home_latitude: latitude
    };

    API.post("/users", user).then(data => {
      let addedUser = new User(
        data.id,
        data.name,
        data.home_longitude,
        data.home_latitude
      );
      addedUser.renderUser();
    });
  }

  static retrieveUser(userId) {
    API.get(`/users/${userId}`).then(user => {
      let userHouses = user.houses;

      User.showUserPins(user, userHouses);
    });
  }

  static showUserPins(user, houses) {
    houses.forEach(house => {
      console.log(house);
      //user.home long and lat turn into string and pass into googleMap.addHome
      //need to turn coordinates into key value page to pass in add marker method
      addMarker(house);
    });
  }
}
