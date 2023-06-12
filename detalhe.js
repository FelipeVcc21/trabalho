const getProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
  
    fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product details not found');
        }
        return response.json();
      })
      .then(product => {
        const productDetailsContainer = document.getElementById("productDetalhe");
  
        const productHTML = `
          <div class="card">
            <h1 class="title">${product.title}</h1>
            <img src="${product.image}" height="300" alt="img">
            <p class="category">${product.category}</p>
            <p class="price"> R$: ${product.price}</p>
            <p class="description">${product.description}</p>
          </div>
        `;
  
        productDetailsContainer.innerHTML = productHTML;
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  };
  
  getProductDetails();
  