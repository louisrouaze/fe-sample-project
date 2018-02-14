import React from 'react';
import css from '../../styles/application.css';

  

const ShoppingItem = props => {
  const {filename, name, price} = props;
    return (
      <div className="shopping-item">
       <img className="image" src={`../../images/${filename}`} alt={name}/>
       {name}<br/>
       {`$${price}`}<br/>
       <button id="item-btn">Add to cart</button>
      </div>
  );
};

export default ShoppingItem;