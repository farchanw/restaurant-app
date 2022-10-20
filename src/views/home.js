import DataSource from '../scripts/data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <main id="primary" tabindex="0">
      <section id="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
          <img class="img-bg lazyload" data-src='./images/hero-image_2-large.jpg' alt="Resto Mania">
        </picture>
        <div class="box">
          <h1>Resto Mania</h1>
          <p>Referensi restoran tepercaya</p>
        </div>
      </section>

      <section id="list" class="container">
        <h1 class="heading">Daftar Restoran</h1>
        <div id="list-box">
        </div>
      </section>

      <section id="booking">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
          <img class="img-bg lazyload" data-src='./images/hero-image_4-large.jpg' alt="Resto Mania">
        </picture>
        <div class="box">
          <h1 class="heading">Pemesanan Restoran</h1>
          <form onsubmit="return false">
            <label for="book-restaurant">Pilih Restoran</label>
            <select id="book-restaurant">
              <option>Pilih Restoran...</option>
            </select>
            <label for="book-date">Tanggal Pemesanan</label>
            <input id="book-date" type="date" value="2020-01-01">
            <label for="book-name">Nama Lengkap</label>
            <input id="book-name" type="text" placeholder="John Doe" required>
            <label for="book-tel">Telepon</label>
            <input id="book-tel" type="tel" placeholder="+62">
            <label for="book-number">Berapa orang?</label>
            <input id="book-number" type="number" placeholder="1">
            <button>Pesan Sekarang</button>
          </form>
        </div>
      </section>
    
    </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#list-box');
    const restaurants = await DataSource.list();
    if (!restaurants.message) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.insertAdjacentHTML('beforebegin', `<div class="alert">Terjadi kesalahan:  ${restaurants.message}</div>`);
    }
  },
};

export default Home;
