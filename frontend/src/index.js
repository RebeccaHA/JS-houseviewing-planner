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

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 13,
  center: { lat: 51.5032, lng: -0.1123 }
});

function initMap() {
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
  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: "images/home.png"
  });
}

addMarker({ lat: 51.5032, lng: -0.1123 }, "<h1>HELLO</h1>");
