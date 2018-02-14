import React from 'react';
import css from '../../styles/application.css';
import ShoppingItem from './ShoppingItem.jsx';
  

const ShoppingMenu = props => {
  const {items} = props;
  const shoppingItems = items.map((item, i) => {
    return <ShoppingItem filename={item.filename} price={(item.price)/100}
                        name={item.name} key={i}/>
                      })
                      return (
                        <div className='shopping-menu-outer'>
                          Shop our featured collection
                          <div className='shopping-menu'>
                            {shoppingItems}
                          </div>
                        </div>
                      );
                    };

export default ShoppingMenu;