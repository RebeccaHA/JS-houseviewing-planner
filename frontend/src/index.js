User.getAllUsers();

// googleMap.getMap();

const userForm = document.getElementById("user-form");
const userSelect = document.getElementById("user-dropdown");

userSelect.addEventListener("change", e => {
  let userId = e.target.value;

  User.retrieveUser(userId);
});
userForm.addEventListener("submit", e => {
  e.preventDefault();
  User.createUser();
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 51.5032, lng: -0.1123 }
  });
  return map;
}

initMap();

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
  debugger;
  let marker = new google.maps.Marker({
    position: coords,
    map: map
    // icon: "src/images/home.png"
  });
}
