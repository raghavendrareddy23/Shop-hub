import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="cart">
      {cart.map((item) => (
        <Card key={item.id} variant="outlined" style={{ marginBottom: 10 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img src={item.image} alt={item.title} style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <div className="total">Total: ${getTotalPrice()}</div>
      <Link to="/products">
        <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
          Explore More
        </Button>
      </Link>
      <Link to="/checkout"> {/* Redirects to the checkout page */}
        <Button variant="contained" color="primary" style={{ marginTop: 10, marginRight: 10 }}>
          Go to Checkout
        </Button>
      </Link>
    </div>
  );
}

export default Cart;

