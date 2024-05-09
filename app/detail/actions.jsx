
export const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error('An error occurred while fetching products:', error);
    throw error;
  }
};
export const getProductById = async (productId) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product with ID ${productId}`);
    }
    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`An error occurred while fetching product with ID ${productId}:`, error);
    throw error;
  }
};
