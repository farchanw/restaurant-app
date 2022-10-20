import FavoriteIdb from '../scripts/data/favorite';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <main id="primary" tabindex="0">
      <section id="list" class="container">
        <h1 class="heading">Favorit</h1>
        <div id="list-box">
          <div class="restaurant-item-not-found">Tidak ada restoran untuk ditampilkan</div>
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#list-box');
    const restaurants = await FavoriteIdb.getAllRestaurants();

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<div class="restaurant-item-not-found">Tidak ada restoran untuk ditampilkan</div>';
      return;
    }

    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
