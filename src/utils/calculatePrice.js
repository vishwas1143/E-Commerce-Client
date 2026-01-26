export const calculateSubtotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateTax = (subtotal) => {
  return subtotal * 0.05;
};

export const calculateTotal = (subtotal, tax) => {
  return subtotal + tax;
};
