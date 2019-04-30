import React from "react";
import PropTypes, { array } from "prop-types";
import "./ItemPage.css";
import Item from "./item.js";

var ItemPage = ({ items, onAddToCart }) => {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item} onAddToCart={() => onAddToCart(item)} />
        </li>
      ))}
    </ul>
  );
};
ItemPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemPage;
