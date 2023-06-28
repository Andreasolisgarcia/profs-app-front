import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <>
      <div className="search-bar-container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i><FontAwesomeIcon icon={faChalkboardTeacher} /></i>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
