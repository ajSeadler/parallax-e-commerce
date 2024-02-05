import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ProductModal = ({ open, handleClose, product }) => {
  if (!product) {
    return null; // If no product is selected, do not render the modal
  }

  const { name, price, image, description, category, rating } = product;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Category: {category}
        </Typography>
        <img src={image} alt={name} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
          ${price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Rating: {rating}
        </Typography>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
