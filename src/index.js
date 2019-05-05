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
    cart: []
  };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };
  handleAddToCart = item => {
    this.setState({ cart: [...this.state.cart, item.id] });
  };
  handleRemoveFromCart = item => {
    let index = this.state.cart.indexOf(item.id);

    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
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
      />
    );
  };

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
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-Content">{this.renderContent()}</main>
      </div>
    );
  }
}

const RootElement = document.getElementById("root");
ReactDOM.render(<App />, RootElement);
