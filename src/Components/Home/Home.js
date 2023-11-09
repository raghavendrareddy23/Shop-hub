import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.module.css"; // Import your CSS file with the provided styles

const Home = () => {
  return (
    <Box
      className="intro-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set the container height to full viewport height
      }}
    >
      <Box className="intro-content" textAlign="center">
        <Typography variant="h2" gutterBottom>
          Welcome to ShopHub!
        </Typography>
        <Typography variant="body1" paragraph>
          Discover a world of amazing products at your fingertips.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/products"
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
