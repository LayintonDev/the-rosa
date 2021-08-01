import React from 'react';
import { Link } from "react-router-dom"

import logo from "../../assets/logo-rosa.png"
const Header = () => {
 return(
<header>
  <div className="container">
    <nav className="nav">
      <div className="menu-toggle">
        <i className="fas fa-bars" />
        <i className="fas fa-times" />
      </div>
      <Link to="index.html" className="logo"><img src={logo}alt="" /></Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="index.html" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Reservations</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">News</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

// <!-- header ends -->
);
}

export default Header;
