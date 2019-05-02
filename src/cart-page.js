import React from "react";
import "./CartPage.css";
import PropTypes from "prop-types";
import Item from "./item";

var CartPage = ({ items }) => {
  return (
    <ul className="cartPageItems">
      {items.map(item => (
        <li key={item.id} className="cartPageItem">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default CartPage;
