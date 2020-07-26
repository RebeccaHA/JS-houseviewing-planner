class House {
  constructor(
    id,
    name,
    lng,
    lat,
    viewing_time,
    viewing_date,
    house_information,
    user_id
  ) {
    (this.id = id),
      (this.name = name),
      (this.lng = lng),
      (this.lat = lat),
      (this.viewing_time = viewing_time),
      (this.viewing_date = viewing_date),
      (this.house_information = house_information),
      (this.user_id = user_id);
  }

  static addViewing() {
    const name = document.getElementById("house-name").value;
    const longitude = document.getElementById("lng").value;
    const latitude = document.getElementById("lat").value;
    const viewing_time = document.getElementById("viewing-date").value;
    const viewing_date = document.getElementById("viewing-time").value;
    const house_information = document.getElementById("house-information")
      .value;
    const user = document.getElementById("user-dropdown");
    const user_id = user.options[user.selectedIndex].value;

    let house = {
      name: name,
      lng: longitude,
      lat: latitude,
      viewing_time: viewing_time,
      viewing_date: viewing_date,
      house_information: house_information,
      user_id: user_id
    };

    API.post("/houses", house).then(data => {
      let newHouse = new House(
        data.id,
        data.name,
        data.lng,
        data.lat,
        data.viewing_time,
        data.viewing_date,
        data.house_information,
        data.user_id
      );

      let coords = {
        lat: newHouse.lat,
        lng: newHouse.lng
      };

      let content = `<h1>${newHouse.name}</h1> <p>${newHouse.viewing_date} <br> ${newHouse.viewing_time}<br> ${newHouse.house_information}</p>`;
    });
  }
}
