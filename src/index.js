import React from "react";
import Nav from "./nav";
import "./styles.css";
import ReactDOM from "react-dom";
import { items } from "./static-data.js";

import ItemPage from "./item-page";

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

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return <span>Cart</span>;
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
