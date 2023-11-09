import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard"; // Import the ProductCard component

function ProductList() {
  const [products, setProducts] = useState([]);

  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h2" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {Array.isArray(products) &&
          products.length > 0 &&
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              {/* Use the ProductCard component here */}
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default ProductList;

