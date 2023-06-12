const search = document.getElementById('Search');
const buttonSearch = document.getElementById('button');
const mosaicContainer = document.getElementById('produtos');

function searchProducts() {
  axios.get('https://diwserver.vps.webdock.cloud/products')
    .then(response => {
      const products = response.data.products.slice(0, 11);

      const cards = products.map(product => `
        <div class="card">
          <a href="detalhe.html?id=${product.id}">
            <h1 class="title">${product.title}</h1>
          </a>
          <img src="${product.image}" height="300" alt="img">
          <p class="category">${product.category}</p>
          <p class="price"> R$: ${product.price}</p>
        </div>
      `);

      mosaicContainer.innerHTML = cards.join('');
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

searchProducts();
