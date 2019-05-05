import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item, children }) => {
  return (
    <div className="item">
      <div className="itemLeft">
        <div className="itemImage" />
        <div className="itemTitle">{item.name}</div>
        <div className="itemDescription">{item.description}</div>
      </div>

      <div className="itemRight">
        <div className="itemPrice">${item.price}</div>
        {children}
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Item;
