/**
 * This function allows to calculate the total price of a new order
 * @param {Array} products cartProduct: Array of object
 * @returns {number} Total product price
 */

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
