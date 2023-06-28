import React from "react";
import Searchbar from "../Searchbar";
import TypeWriter from "./TypeWriter";


const typeWriter =  [
    "Grades",
"Hobbies",
"Skills",
"Passions",
"Interests",
"Talents",
"Job prospects",
"Personal work",
"Career opportunities",
"Marketable skills",
"Professional growth",
"Networking",
"Creativity"
];

const Header = () => {
  return (
    <>
      <header>
        <div className="header-landing-page">
          <div className="header-left">
            <div className="text">
              <h1>What would you like to learn today?</h1>
              <h2>
                Remember a new <span className="tutor">Tutor </span>means new...
              </h2>
            </div>
            <div className="typing-text">
              <h2>
                <span className="auto-type"><TypeWriter data={typeWriter} /></span>
              </h2>
            </div>

            <Searchbar/>
          </div>

          <div className="header-right"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
