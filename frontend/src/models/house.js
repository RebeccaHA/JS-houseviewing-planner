class House {
  constructor(
    id,
    name,
    lng,
    lat,
    viewing_time,
    viewing_date,
    house_information
  ) {
    (this.id = id),
      (this.name = name),
      (this.lng = lng),
      (this.lat = lat),
      (this.viewing_time = viewing_time),
      (this.viewing_date = viewing_date),
      (this.house_information = house_information);
  }

  static addViewing() {
    const name = document.getElementById("house-name").value;
    const longitude = document.getElementById("lng").value;
    const latitude = document.getElementById("lat").value;
    const viewing_time = document.getElementById("viewing-date").value;
    const viewing_date = document.getElementById("viewing-time").value;
    const house_information = document.getElementById("house-information");
    const user_id = document.getElementById("option").value;
    let house = {
      name: house - name,
      lng: longitude,
      lat: latitude,
      viewing_time: viewing_time,
      viewing_date: viewing_date,
      house_information: house_information
    };

    API.post("/houses", house).then(data => {
      let newHouse = new House(
        data.id,
        data.name,
        data.lng,
        data.lat,
        data.viewing_time,
        data.viewing_date,
        data.house_information
      );

      let coords{
          
      }
      newHouse.addMarker(newHouse, content);
    });
  }
}
