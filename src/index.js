import React from "react";
import Nav from "./nav";
import "./styles.css";
import ReactDOM from "react-dom";
import { items } from "./static-data.js";

import ItemPage from "./item-page";
import CartPage from "./cart-page";

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: [],
    price: 0
  };
  //Function to handle the tab change
  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  //Function to handle adding things to cart
  handleAddToCart = item => {
    this.setState({ cart: [...this.state.cart, item.id] });
    this.setState({ price: this.state.price + item.price });
  };

  //Function to handle removing things from the cart
  handleRemoveFromCart = item => {
    let index = this.state.cart.indexOf(item.id);

    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
    this.setState({ price: this.state.price - item.price });
  };
  //Renders the cart Page
  renderCart = () => {
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    let cartItems = Object.keys(itemCounts).map(itemId => {
      var item = items.find(item => item.id === parseInt(itemId, 10));

      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveFromCart}
        itemPrice={this.state.price}
      />
    );
  };

  //Helps decide which page will be rendered
  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  }

  render() {
    //A lil Object Destructuring is good for the soul
    let { activeTab } = this.state;

    return (
      <div className="App">
        <Nav
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          itemsInCart={this.state.cart.length}
          price={this.state.price}
        />
        <main className="App-Content">{this.renderContent()}</main>
      </div>
    );
  }
}

const RootElement = document.getElementById("root");
ReactDOM.render(<App />, RootElement);
