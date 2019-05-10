import React from "react";

var Nav = ({ activeTab, onTabChange, itemsInCart, price }) => {
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
        <span className="showCartItems">
          {itemsInCart} Items (${price})
        </span>
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
