import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ cartCount }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2 className="logo" onClick={() => navigate("/")}>
        ShopKart
      </h2>

      <div className="cart-icon" onClick={() => navigate("/cart")}>
        <FaShoppingCart size={22} />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </header>
  );
}

export default Header;
