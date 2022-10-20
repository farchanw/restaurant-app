import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async list() {
    const fetchData = await fetch(API_ENDPOINT.LIST)
      .then((response) => response.json())
      .catch((error) => error);

    return (fetchData.restaurants) ?? fetchData;
  }

  static async detail(id) {
    const fetchData = await fetch(API_ENDPOINT.DETAIL(id))
      .then((response) => response.json())
      .catch((error) => error);

    return (fetchData.restaurant) ?? fetchData;
  }
}

export default DataSource;
