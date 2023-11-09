import React, { useState, useEffect } from 'react';
import { useCart } from '../Cart/CartContext';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    creditCard: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    setIsAuthenticated(true); 
  }, []); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (cart.length === 0) {
      errors.cart = 'Cart is empty. Add items to proceed with the checkout.';
      isValid = false;
    }

    if (!formData.name) {
      errors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
      isValid = false;
    }

    if (!formData.address) {
      errors.address = 'Address is required.';
      isValid = false;
    }

    if (!formData.creditCard) {
      errors.creditCard = 'Credit Card Number is required.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      history.push('/login');
      return;
    }

    if (validateForm()) {
      // Here, you can implement the logic to process the order,
      // send the data to the server, or perform any other necessary actions.
      // For this example, let's clear the cart after the checkout.
      clearCart();
      alert('Order placed successfully!');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      {errors.cart && <Typography variant="body1" color="error" gutterBottom>{errors.cart}</Typography>}
      <Grid container spacing={2}>
        {cart.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <div className="checkout-item">
              <Typography variant="h6">{item.title}</Typography>
              <Typography>
                Quantity: {item.quantity} x ${item.price}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" align="right" gutterBottom>
        Total: ${getTotalPrice()}
      </Typography>

      <form>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          multiline
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          error={!!errors.address}
          helperText={errors.address}
          required
        />
        <TextField
          label="Credit Card Number"
          fullWidth
          margin="normal"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleInputChange}
          error={!!errors.creditCard}
          helperText={errors.creditCard}
          required
        />
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Place Order
        </Button>
      </form>
    </Container>
  );
}

export default Checkout;


