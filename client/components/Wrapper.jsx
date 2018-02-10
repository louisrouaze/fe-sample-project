import React from 'react';
import css from '../../styles/application.css';
import ShoppingMenu from './ShoppingMenu.jsx';
import Cart from './Cart.jsx';
  

const Wrapper = props => {
  return (
    <div className='wrapper'>
      <ShoppingMenu />
      <Cart />
    </div>
  );
};

export default Wrapper;