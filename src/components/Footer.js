import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
         <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i> <FontAwesomeIcon icon={faBrain} /> </i>
            <span className="logo_name">TheLogo</span>
          </div>
        
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">TheLogo</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
          
          <ul className="box">
            <li className="link_name">My account</li>
            <li><a>My Profile</a></li>
            <li><a>Prefrences</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Courses</li>
            <li><a href="#">Look for Tutors</a></li>
            <li><a href="#">Check the courses</a></li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email"/></li>
            <li> <button className="btn-1 nav-btn">subscribe</button></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2023<a href="#"> TheProfApp</a>All rights reserved</span>
        </div>
      </div>

    </footer>
        </>
    );
};

export default Footer;