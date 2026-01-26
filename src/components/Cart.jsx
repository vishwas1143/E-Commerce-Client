import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart({ cart, increaseQty, decreaseQty, clearCart }) {
  const navigate = useNavigate();

  // Ensure cart is always an array
  const items = Array.isArray(cart) ? cart : [];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const placeOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Order failed");
        return;
      }

      clearCart(); // Clear frontend cart state
      toast.success(data.message);
      navigate("/order-success");
    } catch (err) {
      toast.error("Error placing order");
    }
  };

  return (
    <div className="cart-page">
      {/* Back Arrow */}
      <div
        className="back-home"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", marginBottom: "20px" }}
      >
        <FaArrowLeft /> Back to Home
      </div>

      <h2>Cart Items</h2>

      {items.length === 0 && (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <p>Add items to place an order</p>
        </div>
      )}

      {items.map((item) => (
        <div key={item.product} className="cart-item">
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.product)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.product)}>+</button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="price-summary">
          <h3>Price Summary</h3>

          <p>
            Subtotal: <span>₹{subtotal}</span>
          </p>

          <p>
            Tax (5%): <span>₹{tax.toFixed(2)}</span>
          </p>

          <hr />

          <p className="total">
            Total: <span>₹{total.toFixed(2)}</span>
          </p>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
