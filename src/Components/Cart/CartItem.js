import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
