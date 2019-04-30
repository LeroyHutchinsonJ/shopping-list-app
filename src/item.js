import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item, onAddToCart }) => {
  return (
    <div className="item">
      <div className="itemLeft">
        <div className="itemImage" />
        <div className="itemTitle">{item.name}</div>
        <div className="itemDescription">{item.description}</div>
      </div>

      <div className="itemRight">
        <div className="itemPrice">${item.price}</div>
        <button className="itemAddToCart" onClick={onAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Item;
