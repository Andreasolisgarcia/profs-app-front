import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="nav-container">
      <nav>
        <ul>
            <Link to="/">
          <li>TheBestLogo</li>
          </Link>
        </ul>

        <ul class="rigth-part">
          <li>
            <Link to="/teachers">
            <button class="btn-1">Teachers</button></Link>
          </li>
          <li>
          <Link to="./login"><button class="btn-1">connexion</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
