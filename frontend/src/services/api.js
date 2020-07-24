class API {
  static baseURL = "http://localhost:3000";

  static get(url) {
    return fetch(this.baseURL + url).then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
