import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import OrderSuccess from "./pages/OrderSuccessPage";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import PriceSummary from "./components/PriceSummary";
import initialProducts from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const cartCount = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const addToCart = async (productId) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      setCart(data);
      toast.success("Added to cart");
    } catch (err) {
      toast.error("Error adding to cart");
      console.error(err);
    }
  };

  const increaseQty = async (id) => {
    const res = await fetch(`http://localhost:5000/api/cart/increase/${id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    setCart(data);
  };

  const decreaseQty = async (id) => {
    const res = await fetch(`http://localhost:5000/api/cart/decrease/${id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    setCart(data);
  };
  const removeItem = async (id) => {
    const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setCart(data);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              clearCart={clearCart}
            />
          }
        />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
