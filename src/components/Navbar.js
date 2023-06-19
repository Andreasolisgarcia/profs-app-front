import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="nav-container">
      <nav>
        <ul>
          <li>TheBestLogo</li>
        </ul>

        <ul class="rigth-part">
          <li>
            <button class="btn-1">Teachers</button>
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
