import React, { useEffect } from "react";
import profilePicture from '../../assets/img/profile-picture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CardSlider = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false;
    let isAutoPlay = true;
    let startX, startScrollLeft, timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
      };
  
      autoPlay();
  
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("scroll", infiniteScroll);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.addEventListener("mouseleave", autoPlay);
  
      return () => {
        // Cleanup: remove event listeners
        carousel.removeEventListener("mousedown", dragStart);
        carousel.removeEventListener("mousemove", dragging);
        document.removeEventListener("mouseup", dragStop);
        carousel.removeEventListener("scroll", infiniteScroll);
        wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.removeEventListener("mouseleave", autoPlay);
      };
    }, []);
    
  return (
    <>
      <div className="card-slider">
        <div className="top-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="wrapper">
          <i id="left"><FontAwesomeIcon id="left" icon={faAngleLeft} /></i>
          <ul className="carousel">
            <li className="card">
              <div className="img">
                <img
                  src= {profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>Blanche Pearson</h2>
              <span>Sales Manager</span>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src={profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>Joenas Brauers</h2>
              <span>Web Developer</span>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src={profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>Lariach French</h2>
              <span>Online Teacher</span>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src={profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>James Khosravi</h2>
              <span>Freelancer</span>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src={profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>Kristina Zasiadko</h2>
              <span>Bank Manager</span>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src={profilePicture}
                  alt="img"
                  draggable="false"
                />
              </div>
              <h2>Donald Horton</h2>
              <span>App Designer</span>
            </li>
          </ul>
          <i id="right"><FontAwesomeIcon id="right" icon={faAngleRight} /></i>
        </div>

        <div className="bottom-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CardSlider;

