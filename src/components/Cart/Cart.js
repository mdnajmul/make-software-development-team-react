import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div className="cart-member">
      <h3>
        <span className="cart-item">
          <FontAwesomeIcon icon={faUser} /> Members Added:{" "}
        </span>{" "}
        0
      </h3>
      <h3>
        <span className="cart-item">Total Cost: </span>$ 0
      </h3>
      <button className="buyNow-btn">Buy Now</button>
    </div>
  );
};

export default Cart;
