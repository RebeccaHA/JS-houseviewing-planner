function initMap() {
  const london = { lat: 51.5032, lng: -0.1123 };
  const options = {
    zoom: 13,
    center: london
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  addMarker({ lat: 51.5032, lng: -0.1123 }, "<h1>Hello</h1>");

  function addMarker(coords, content) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map
    });

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  function addHome(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: "https://icons8.com/icon/E70fsabn6Rl1/home-address"
    });
  }
}
