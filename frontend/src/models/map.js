function initMap() {
  const london = { lat: 51.5032, lng: -0.1123 };
  const options = {
    zoom: 13,
    center: london
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map
    });
  }
  addHome({ lat: 51.5032, lng: -0.1123 });
  function addHome(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: "frontend/src/images/home.png"
    });
  }

  //   let marker = new google.maps.Marker({
  //     position: { lat: 51.5032, lng: -0.1123 },
  //     map: map
  //   });

  //   let infoWindow = new google.maps.InfoWindow({
  //     content: "<h1>This info</h1>"
  //   });

  //   marker.addListener("click", function() {
  //     infoWindow.open(map, marker);
  //   });
}
