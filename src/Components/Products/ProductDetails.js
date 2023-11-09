import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../Cart/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch specific product details from the API based on the ID parameter
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add the selected product to the cart
      addToCart(product);

      // Show the popup message
      setShowPopup(true);

      // Hide the popup after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Product added to cart!</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
