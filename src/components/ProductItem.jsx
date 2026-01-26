function ProductItem({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />

      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Available: {product.stock}</p>

      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
