import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Member from "../Member/Member";
import "./Shop.css";

const Shop = () => {
  // set members & cart value by using useState method
  const [members, setMembers] = useState([]);
  const [cart, setCart] = useState([]);

  // data load by using useEffect method
  useEffect(() => {
    fetch("./software-team.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  // write a onclick function
  const handleAddToCart = (member) => {
    if (!cart.includes(member)) {
      const newCart = [...cart, member];
      setCart(newCart);
    } else {
      alert("Already added!");
    }
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
