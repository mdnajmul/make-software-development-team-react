import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Member.css";

const Member = (props) => {
  // destructuring all members data
  const { name, country, designation, age, img, salary } = props.member;

  return (
    <div className="member">
      <div>
        <img style={{ width: "100px", height: "100px" }} src={img} alt=""></img>
        <h3>
          <span>Name:</span> {name}
        </h3>
        <h3>
          <span>Designation:</span> {designation}
        </h3>
        <h3>
          <span>Country:</span> {country}
        </h3>
        <h3>
          <span>Age:</span> {age}
        </h3>
        <h3>
          <span>Salary:</span> ${salary}
        </h3>
        <button
          onClick={() => props.handleAddToCart(props.member)}
          className="hire-me-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Hire Me
        </button>
        <p>
          <small className="fb-icon">
            <i class="fab fa-facebook-square icon"></i>
          </small>
          <small className="lind-icon">
            <i class="fab fa-linkedin icon"></i>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Member;
