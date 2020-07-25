class googleMap {
  static getMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 51.5032, lng: -0.1123 }
    });
    return map;
  }

  addMarker(coords, content) {
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

  addHome(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: "images/home.png"
    });
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }
}
