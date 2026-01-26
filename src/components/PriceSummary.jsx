import {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
} from "../utils/calculatePrice";

function PriceSummary({ cart }) {
  const subtotal = calculateSubtotal(cart);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <div className="price-summary">
      <h2>Price Summary</h2>

      <p>Subtotal: ₹{subtotal}</p>
      <p>Tax (5%): ₹{tax.toFixed(2)}</p>
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default PriceSummary;
