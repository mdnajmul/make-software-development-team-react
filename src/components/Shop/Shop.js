import React, { useEffect, useState } from "react";
import Member from "../Member/Member";
import "./Shop.css";

const Shop = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./software-team.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="member-container">
        {members.map((member) => (
          <Member key={member.key} member={member}></Member>
        ))}
      </div>
      <div className="cart-container">
        <h3>Cart Container</h3>
      </div>
    </div>
  );
};

export default Shop;
