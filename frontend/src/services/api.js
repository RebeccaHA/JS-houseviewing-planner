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

  static post(url, data) {
    return fetch(this.baseURL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static patch(url, data) {
    return fetch(this.baseURL + url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}
