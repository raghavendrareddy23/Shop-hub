import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useCart } from "../Cart/CartContext"; // Import the CartContext

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardMedia = styled(CardMedia)({
  objectFit: "cover", // Use "cover" to maintain aspect ratio and fill the container
});

const ButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between", 
  marginTop: "10px",
  color: "gray",
});

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  const handleAddToCart = () => {
    addToCart(product); // Call addToCart function with the selected product
  };

  return (
    <StyledCard>
      {product.image ? (
        <StyledCardMedia component="img" alt={product.title} height="350" image={product.image} />
      ) : (
        <StyledCardMedia component="img" alt="No Image" height="350" /> // Placeholder for products without images
      )}
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <ButtonsContainer>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button href={`/products/${product.id}`} variant="contained">
            View Details
          </Button>
        </ButtonsContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;

