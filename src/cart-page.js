import React from "react";
import "./CartPage.css";
import PropTypes from "prop-types";
import Item from "./item";

var CartPage = ({ items, onAddOne, onRemoveOne }) => {
  return (
    <ul className="cartPageItems">
      {items.map(item => (
        <li key={item.id} className="cartPageItem">
          <Item item={item}>
            <div className="cartItemControls">
              <button
                className="cartItemRemoveOne"
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>
              <span className="cartItemCount"> {item.count} </span>
              <button className="cartItemAddOne" onClick={() => onAddOne(item)}>
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
