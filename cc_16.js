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
