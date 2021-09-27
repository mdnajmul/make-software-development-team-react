import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Member from "../Member/Member";
import "./Shop.css";

const Shop = () => {
  const [members, setMembers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./software-team.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  const handleAddToCart = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="member-container">
        {members.map((member) => (
          <Member
            key={member.key}
            member={member}
            handleAddToCart={handleAddToCart}
          ></Member>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
