import React from "react";
import "./CartPage.css";
import PropTypes from "prop-types";
import Item from "./item";

var CartPage = ({ items, onAddOne, onRemoveOne, itemPrice }) => {
  var showWords = "emptyCart";
  var showWordsTwo = "emptyCartTwo";
  var hideWords = "";

  return (
    <>
      <ul className="cartPageItems">
        <div className="addItemsPrompt">
          {" "}
          <div className={items.length === 0 ? showWords : hideWords} />
          <div className={items.length === 0 ? showWordsTwo : hideWords} />
        </div>

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
                <button
                  className="cartItemAddOne"
                  onClick={() => onAddOne(item)}
                >
                  +
                </button>
              </div>
            </Item>
          </li>
        ))}
      </ul>

      <div className="totalPrice">Total: ${itemPrice}</div>
    </>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
