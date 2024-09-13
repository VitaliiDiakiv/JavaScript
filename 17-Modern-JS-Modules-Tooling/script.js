// import { shippingCost, cart } from './shoppingCart.js';
// console.log('import');
// console.log(cart);

const ShoppingCard = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 12;
  const totalQuantity = 4;

  const addToCart = function (product, quantity) {
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStack = function (product, quantity) {
    console.log(`${quantity} ${product} order`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCard.addToCart('apple', 3);
