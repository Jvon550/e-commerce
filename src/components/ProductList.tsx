import React from "react";
import { Grid, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const ProductList = () => {
  const products = [
    {
      name: "Product 1",
      image: "https://via.placeholder.com/150x150",
      price: 100,
    },
    {
      name: "Product 2",
      image: "https://via.placeholder.com/150x150",
      price: 200,
    },
    {
      name: "Product 3",
      image: "https://via.placeholder.com/150x150",
      price: 300,
    },
  ];

  const Item = styled(Paper)(({theme})=>({
    
  }))

  return (
    <React.Fragment>
        <Grid container spacing={2}>
        {products.map((product) => (
            <Grid item xs={12} sm={6}>
            <ListItem>
                <ListItemAvatar >
                <img src={product.image} alt={product.name} />
                </ListItemAvatar>
                <ListItemText primary={product.name} secondary={`${product.price} USD`} />
            </ListItem>
            </Grid>
        ))}
        </Grid>
    </React.Fragment>
  );
};

export default ProductList;