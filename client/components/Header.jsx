import React from 'react';
import css from '../../styles/application.css';
const FontAwesome = require('react-fontawesome');



const Header = props => {  
    return (
    <div className='header'>
        <div className="logo">
          <i className="fas fa-shopping-cart"></i>Cart.ly
        </div>
        <div className="menu-item">
          <p>Shop</p>
        </div>
        <div className="cart">
          <p>Your Cart</p>
          <button type='button' className='btn'>{props.numberItems}</button>
        </div>
    </div>
  );
};

export default Header;