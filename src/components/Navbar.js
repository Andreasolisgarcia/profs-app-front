import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
            <Link to="/">
          <li>TheBestLogo</li>
          </Link>
        </ul>

        <ul className="rigth-part">
          <li>
            <Link to="/courses">
            <button className="btn-1 nav-btn">Courses</button></Link>
          </li>
          <li>
          <Link to="./login"><button className="btn-1 nav-btn">connexion</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
