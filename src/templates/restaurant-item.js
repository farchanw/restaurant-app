class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id') || '';
    this.name = this.getAttribute('name') || '';
    this.image = this.getAttribute('image') || '';
    this.city = this.getAttribute('city') || '';
    this.description = this.getAttribute('description') || '';

    this.innerHTML = `
    <article id="item-${this.id}" class="card">
    <a href="#/detail/${this.id}">
        <img loading="lazy" width="400" height="400" src="${this.image}" alt="${this.name}">
        <div class="content">
            <span class="badge">${this.city}</span>
            
            <h1 class="restaurant-title">${this.name}</h1>
            <p>${this.description}</p>
        </div>
    </a>
</article>
      `;
  }
}
customElements.define('app-restaurant-item', RestaurantItem);
