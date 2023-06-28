import React, { useEffect } from "react";
import profilePicture from '../../assets/img/profile-picture.png'

const CardInSlider = ({course}) => {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];
    
        let isDragging = false;
        let isAutoPlay = true;
        let startX, startScrollLeft, timeoutId;
    
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
 
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
          carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
    

        carouselChildrens.slice(0, cardPerView).forEach(card => {
          carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });
    

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    

        arrowBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
          });
        });
    
        const dragStart = (e) => {
          isDragging = true;
          carousel.classList.add("dragging");

          startX = e.pageX;
          startScrollLeft = carousel.scrollLeft;
        };
    
        const dragging = (e) => {
          if (!isDragging) return; 
          carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };
    
        const dragStop = () => {
          isDragging = false;
          carousel.classList.remove("dragging");
        };
    
        const infiniteScroll = () => {
        
          if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
          }
    
          else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
          }
    
   
          clearTimeout(timeoutId);
          if (!wrapper.matches(":hover")) autoPlay();
        };
    
        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return; 
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
            <li className="card" key={course.id}>
          <div className="img">
            <img
              src={profilePicture}
              alt="img"
              draggable="false"
            />
          </div>
          <div className="info-content">
            <h2>{course.teacher.contact_info.first_name} {course.teacher.contact_info.last_name}</h2>
            <span>{course.title}</span>
            <div className="footer">
              <p>{course.price} € h</p>
              <button className="more-btn"></button>
            </div>
          </div>
        </li> 
        </>
    );
};

export default CardInSlider;