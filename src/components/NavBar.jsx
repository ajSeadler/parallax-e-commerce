import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const NavBar = () => {
  

  return (
    <nav className='sticky-nav'>
      <div className="container">
        <h3 className="logo">nature<span>market</span></h3>


        <div className="nav-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/products" className="nav-link">PRODUCTS</Link>
        </div>
          
        <div className="hamburger-menu">
          <div className="bar"></div>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
