import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#151515', padding: '2rem', color: 'white' }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <Link href="#" color="inherit">
            <FacebookIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            <InstagramIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            <TwitterIcon fontSize="large" />
          </Link>
        </Grid>
        {/* Add more social icons as needed */}
      </Grid>

      <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
        &copy; 2024 Nature Market. All rights reserved. <br></br> (This is a fake company for educational purposes.)
      </Typography>
    </footer>
  );
};

export default Footer;
