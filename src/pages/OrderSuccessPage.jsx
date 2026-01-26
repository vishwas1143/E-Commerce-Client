import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="order-success">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for shopping with us.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default OrderSuccess;
