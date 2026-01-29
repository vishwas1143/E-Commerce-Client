function ProductItem({ product, addToCart }) {
  // console.log("pro", product);
  return (
    <div className="product-card">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="product-img"
      />

      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Available: {product.stock}</p>

      <button onClick={() => addToCart(product._id)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
