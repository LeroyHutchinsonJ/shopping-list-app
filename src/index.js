import React from "react";
import Nav from "./nav";
import "./styles.css";
import ReactDOM from "react-dom";
class App extends React.Component {
  state = {
    activeTab: 0
  };

  handleTabChange = index => {
    this.setState({ activeTab: index });
  };

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <span>Items</span>;
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
