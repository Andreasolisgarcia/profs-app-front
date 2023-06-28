import React, { useRef, useEffect } from 'react';
import Searchbar from "../Searchbar";
import Typed from 'typed.js';



const Header = () => {
    const el = useRef(null); // Ref to store the DOM element

  useEffect(() => {
    // Initialize Typed.js inside the useEffect hook
    const typed = new Typed(el.current, {
      strings: [
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
    ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
    });

    // Clean up the Typed instance during component unmount
    return () => {
      typed.destroy();
    };
  }, []);
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
                <span className="auto-type" ref={el} />
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
