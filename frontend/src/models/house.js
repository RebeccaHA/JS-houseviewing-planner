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

  static addViewing() {}
}
