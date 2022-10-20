/* eslint-disable no-undef */
const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/#');
});

Scenario('submit review', async ({ I }) => {
  const timestamp = Date.now();
  const text = `Sangat mantap recommended 5/5 ${timestamp}`;
  const content = locate('app-review-item .review-content').first();

  I.waitForElement('app-restaurant-item a');
  I.seeElement('app-restaurant-item a');

  const firstRestaurant = locate('app-restaurant-item a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');

  I.fillField('name', 'e2e');
  I.fillField('text', text);
  I.click('Kirim');

  I.waitForElement(content);
  I.seeElement(content);
  const submittedText = await I.grabTextFrom(content);
  assert.strictEqual(text, submittedText);
});
