//  Task 2: Fetch() products with .then()
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR!: ${response.status}`);
      }
      return response.json();
    })
    .then(products => {
      console.log('Product names:');
      data.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      handleError(error);
    });
}
// Task 3: Fetch products with async/await
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error(`HTTP ERROR!: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}
// Task 3: Using async/await with try/catch
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error(`HTTP ERROR!: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}
//  Task 4: Display the first 5 products
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.slice(0, 5).forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.fields.image[0].url}" alt="${product.fields.name}"><h3>${product.fields.name}</h3><p>$${product.fields.price / 100}</p>`;
    container.appendChild(productCard);
  });
}
// Task 3: Using async/await with try/catch
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error(`HTTP ERROR!: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}
// Task 4: Reusable error handler
function handleError(error) {
  console.error("An error occurred:", error.message);
}
// Task 5: Reusable error handler
function handleError(error) {
  console.error("An error occurred:", error.message);
}
