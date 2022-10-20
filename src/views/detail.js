import UrlParser from '../scripts/routes/url-parser';
import DataSource from '../scripts/data/source';
import { createRestaurantDetailTemplate, createRestaurantReviewItemTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../scripts/utils/like-button-presenter';
import CONFIG from '../scripts/globals/config';

const Detail = {
  async render() {
    return `
    <main id="primary" tabindex="0">

      <section id="content-box" class="container">
        <div class="text-center">
          <div class="spinner"></div>
        </div>
      </section>
    
      <div id="likeButtonContainer"></div>
    </main>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detail(url.id);
    const restaurantContainer = document.querySelector('#content-box');
    if (!restaurant.message) {
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    } else {
      restaurantContainer.innerHTML = `<div class="alert">Terjadi kesalahan:  ${restaurant.message}</div>`;
      return;
    }

    const reviewForm = document.querySelector('#review-submit');
    const reviewList = document.querySelector('#review-list');

    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const reviewName = event.target.name.value;
      const reviewText = event.target.text.value;

      const reviewData = {
        id: url.id,
        name: reviewName,
        review: reviewText,
      };

      fetch(`${CONFIG.BASE_URL}review`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(reviewData),
      })
        .then((response) => response.json().then((responseJson) => {
          if (!responseJson.error) {
            reviewList.innerHTML = responseJson.customerReviews.reverse().map((review) => createRestaurantReviewItemTemplate(review)).join('');
          }
        }));
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
