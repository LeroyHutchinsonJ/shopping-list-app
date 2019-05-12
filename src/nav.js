import React from "react";

var Nav = ({ activeTab, onTabChange, itemsInCart, price }) => {
  //Gotta make it so when the active tab is cart or 1, then the item price shit doesnt show up
  var showIndicator = `${itemsInCart} Items ($${price})`;
  var dontShowIndicator = "";

  var toShowOrNotToShow = activeTab === 0 ? showIndicator : dontShowIndicator;
  return (
    <nav className="App-Nav">
      <ul>
        <b>
          <li className={`App-Nav-Item ${activeTab === 0 && "selected"}`}>
            <NavLink index={0} onClick={onTabChange}>
              Items
            </NavLink>
          </li>
          <li className={`App-Nav-Item ${activeTab === 1 && "selected"}`}>
            <NavLink index={1} onClick={onTabChange}>
              Cart
            </NavLink>
          </li>
        </b>
        <span className="showCartItems">{toShowOrNotToShow}</span>
      </ul>{" "}
    </nav>
  );
};

class NavLink extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}
export default Nav;
