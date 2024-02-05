import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import ProductModal from './ProductModal';
import productsData from '../productsData';

const ProductList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <section className="product-section">
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff', marginTop: '10%', marginBottom:'-8%', fontWeight:'bold' }}>
        JACKETS
      </Typography>
      

      <Grid container spacing={3} justifyContent="center">
      
        {productsData.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginTop: '10%' }}>
            
            <Card onClick={() => handleOpenModal(product)} style={{ backgroundColor: 'rgba(0,0,0, 0.2)', color: '#fff' }}>
              <CardMedia component="img" alt={product.name} height="140" image={product.image} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bolder' }}>
                  ${product.price}
                </Typography>
                <Typography variant="body2" style={{ color: '#fff' }}>
                  {product.description}
                </Typography>
                <Typography variant="body2" style={{ color: '#fff' }}>
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ProductModal open={openModal} handleClose={handleCloseModal} product={selectedProduct} />
    </section>
  );
};

export default ProductList;
