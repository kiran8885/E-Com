import React, { useEffect, useState } from "react";
import "./Home.css"; // Create this CSS file for styling

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="home-container">
      <h1 className="title">🛍️ Welcome to My E-Commerce Store</h1>
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">${item.price}</p>
            <p className="product-rating">⭐ {item.rating.rate} / 5</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
