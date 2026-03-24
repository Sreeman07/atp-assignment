// payment.js

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(method, couponCode = null) {
  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) return { status: "failed", message: "Cart is empty" };

  let discountDetails = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal
  };

  if (couponCode) {
    discountDetails = applyDiscount(subtotal, couponCode);
  }

  if (!validatePaymentMethod(method))
    return { status: "failed", message: "Invalid payment method" };

  // Reduce stock
  items.forEach(item => {
    reduceStock(
      items.find(i => i.name === item.name)?.productId,
      item.quantity
    );
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountDetails.discount,
    total: discountDetails.finalTotal,
    paymentMethod: method,
    status: "success",
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}

function generateOrderId() {
  return 'ORD' + Date.now();
}