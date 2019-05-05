import React from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";
import Item from "./item.js";

var ItemPage = ({ items, onAddToCart }) => {
  return (
    <ul className="ItemPage-items">
      {items.map(item => (
        <li key={item.id} className="ItemPage-item">
          <Item item={item}>
            <button className="itemAddToCart" onClick={() => onAddToCart(item)}>
              Add To Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
};
ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
