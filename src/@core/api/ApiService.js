export default class ApiService {
  static getProducts() {
    return fetch('https://random-data-api.com/api/food/random_food?size=30')
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
