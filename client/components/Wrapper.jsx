import React from 'react';
import css from '../../styles/application.css';
import ShoppingMenu from './ShoppingMenu.jsx';
import Cart from './Cart.jsx';
  

const Wrapper = props => {
  const {items, cartVisible, addedToCart, total} = props;
  
  if (cartVisible) {
    return (
      <div className='wrapper'>
        <ShoppingMenu items={items}/>
        <Cart addedToCart={addedToCart} total={total}/>
      </div>
    );
  }

  return (
    <div className='wrapper'>
      <ShoppingMenu items={items}/>
    </div>
  );
};

export default Wrapper;