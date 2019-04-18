import React from "react";

var Nav = ({ activeTab, onTabChange }) => {
  return (
    <nav className="App-Nav">
      <ul>
        <b>
          <li className={`App-Nav-Item ${activeTab === 0 && "selected"}`}>
            <a onClick={() => onTabChange(0)}>Items</a>
          </li>
          <li className={`App-Nav-Item ${activeTab === 1 && "selected"}`}>
            <a onClick={() => onTabChange(1)}> Cart</a>
          </li>
        </b>
      </ul>{" "}
    </nav>
  );
};

export default Nav;
