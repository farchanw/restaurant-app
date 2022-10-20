/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#primary');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('app-restaurant-item a');
  I.seeElement('app-restaurant-item a');

  const firstRestaurant = locate('app-restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('app-restaurant-item a');
  const likedRestaurantTitle = await I.grabTextFrom('app-restaurant-item a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurants', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('app-restaurant-item a');
  I.seeElement('app-restaurant-item a');

  const firstRestaurant = locate('app-restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('app-restaurant-item a');
  const likedRestaurantTitle = await I.grabTextFrom('app-restaurant-item a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click('app-restaurant-item a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item-not-found');
});
