class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.name = this.getAttribute('name') || '';
    this.date = this.getAttribute('date') || '';
    this.review = this.getAttribute('review') || '';

    this.innerHTML = `
        <div class="review-item">
            <div class="review-header">
                <div class="name">${this.name}</div>
                <div class="date">${this.date}</div>
            </div>
            <div class="review-content">${this.review}</div>
        </div>
      `;
  }
}
customElements.define('app-review-item', ReviewItem);
