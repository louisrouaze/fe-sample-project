import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Wrapper from './components/Wrapper.jsx';
import product from '../product-payload.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: product.products,
      cartVisible: false,
      addedToCart: [],
      total: 0
    }
  }
  render() {
    return (
      <div>
        <Header numberItems={this.state.addedToCart.length}/>
        <Wrapper items={this.state.items} cartVisible={this.state.cartVisible}
                 addedToCart={this.state.addedToCart} total={this.state.total}/>
      </div>
    );
  }
}
export default App;
