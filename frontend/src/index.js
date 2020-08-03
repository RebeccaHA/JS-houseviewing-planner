User.getAllUsers();

const houseForm = document.getElementById("house-form");
const userForm = document.getElementById("user-form");
const userSelect = document.getElementById("user-dropdown");
const addHouseButton = document.getElementById("add-viewing");

userSelect.addEventListener("change", e => {
  let userId = e.target.value;
  User.retrieveUser(userId);
});

userForm.addEventListener("submit", e => {
  e.preventDefault();
  User.createUser();
  clearForm();
});

addHouseButton.addEventListener("click", e => {
  e.preventDefault();
  House.addViewing();
  clearForm();
});

function clearForm() {
  userForm.reset();
  houseForm.reset();
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
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
  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: "src/images/home.png"
  });
}

function addCard(house) {
  const houseCard = document.getElementById("cards");
  const cardDiv = document.createElement("div");
  const cardTitle = document.createElement("h4");
  const cardContent = document.createElement("p");
  const cardInformation = document.createElement("p");
  const checkboxViewed = document.createElement("input");

  cardDiv.classList = "card";
  cardTitle.innerText = `${house.name}`;
  cardContent.innerText = `${house.viewing_date}, ${house.viewing_time}`;
  cardInformation.innerText = `${house.house_information}`;
  checkboxViewed.setAttribute("type", "checkbox");
  checkboxViewed.value = `${house.id}`;
  checkboxViewed.id = "checkbox";

  cardDiv.append(checkboxViewed, cardTitle, cardContent, cardInformation);
  houseCard.appendChild(cardDiv);
  checkboxViewed.addEventListener("change", checkedCard);
}

function checkedCard(e) {
  if (e.target.checked) {
    e.target.parentElement.classList = "card-checked";
  } else {
    e.target.parentElement.classList = "card";
  }
}
