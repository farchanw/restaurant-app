import CONFIG from '../scripts/globals/config';
import './restaurant-item';
import './review-item';

const createRestaurantReviewItemTemplate = (review) => `
<app-review-item 
  name="${review.name}"
  date="${review.date}"
  review="${review.review}">
</app-review-item>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant-title">${restaurant.name}</h2>
<img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}" />

<div class="restaurant-info">
  <h3>Informasi</h3>
  <div class="restaurant-infobox">
    <h4>Kota</h4>
    <div>${restaurant.city}</div>
    <h4>Alamat</h4>
    <div>${restaurant.address}</div>
    <h4>Rating</h4>
    <div>${restaurant.rating}</div>
    <h4>Kategori</h4>
    <div>${restaurant.categories.map((category) => category.name).join(', ')}</div>
  </div>
</div>

<div class="restaurant-info">
  <h3>Deskripsi</h3>
  <p>${restaurant.description}</p>
</div>

<div class="restaurant-info">
  <h3>Menu</h3>
  <div class="restaurant-infobox">
    <h4>Makan</h4>
    <div>${restaurant.menus.foods.map((food) => food.name).join(', ')}</div>
    <h4>Minum</h4>
    <div>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</div>
  </div>
</div>

<div class="restaurant-info">
  <h3>Review</h3>
  <form id="review-submit">
    <input name="name" placeholder="Nama">
    <textarea name="text" placeholder="Tulis review..."></textarea>
    <button>Kirim</button>
  </form>

  <div id="review-list">
    ${restaurant.customerReviews.reverse().map((review) => createRestaurantReviewItemTemplate(review)).join('')}
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<app-restaurant-item
  id="${restaurant.id}"
  name="${restaurant.name}"
  image="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}"
  city="${restaurant.city}"
  description="${restaurant.description}">
</app-restaurant-item>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createRestaurantReviewItemTemplate,
};
