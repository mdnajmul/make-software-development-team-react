import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { cart } = props;
  let quantity = props.cart.length;
  let total = 0;

  for (const member of cart) {
    total = total + member.salary;
  }

  return (
    <div className="cart-member">
      <h3>
        <span className="cart-item">
          <FontAwesomeIcon icon={faUser} /> Members Added:{" "}
        </span>{" "}
        {quantity}
      </h3>
      <h3>
        <span className="cart-item">Total Cost: </span>$ {total}
      </h3>
      {cart.map((member) => (
        <div className="cart-details">
          <img
            style={{ width: "50px", height: "50px" }}
            src={member.img}
            alt=""
          />
          <p>{member.name}</p>
        </div>
      ))}
      <button className="buyNow-btn">Buy Now</button>
    </div>
  );
};

export default Cart;
