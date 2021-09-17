import { useState } from "react";
import {
  FaPhone,
  FaPlane,
  FaSignInAlt,
  FaUser,
  FaHome,
  FaBars,
  FaTimes,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiArrowDunk } from "react-icons/gi";

import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
  const [Icons, setIcons] = useState(false);
  return (
    <div className="navbar__main">
      <div className="navbar__logo">
        <span>
          <FaPlane />
        </span>
        <span className="icons" onClick={() => setIcons(!Icons)}>
          {Icons ? <FaTimes className="times" /> : <FaBars className="bars" />}
        </span>
      </div>
      <div
        onClick={() => setIcons(!Icons)}
        className={Icons ? "navbar__menu active" : "navbar__menu"}
      >
        <Link className="navbar__items">
          HOme
          <span>
            <FaHome className="item__icon" />
          </span>
        </Link>
        <Link className="navbar__items">
          Destinations
          <span>
            <GiArrowDunk className="item__icon" />
          </span>
        </Link>
        <Link className="navbar__items">
          Vacations
          <span>
            <FaUmbrellaBeach className="item__icon" />
          </span>
        </Link>
        <Link className="navbar__items">
          About us
          <span>
            <FaUser className="item__icon" />
          </span>
        </Link>
        <Link className="navbar__items">
          Contact us
          <span>
            <FaPhone className="item__icon" />
          </span>
        </Link>
        <Link className="navbar__items">
          Login
          <span>
            <FaSignInAlt className="item__icon" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
