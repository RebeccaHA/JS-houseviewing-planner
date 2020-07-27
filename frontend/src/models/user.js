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
      console.log(user);
      User.showUserPins(user, userHouses);
    });
  }

  static showUserPins(user, houses) {
    initMap();
    let userHome = {
      lat: user.home_latitude,
      lng: user.home_longitude
    };
    addHome(userHome);

    houses.forEach(house => {
      let coords = {
        lat: house.lat,
        lng: house.lng
      };
      let content = `<h1>${house.name}</h1> <p>${house.viewing_date} <br> ${house.viewing_time} <br> ${house.house_information}</p>`;

      addMarker(coords, content);
    });
  }
}
