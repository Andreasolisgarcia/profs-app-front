import { React, useState } from "react";
import profilePicture from "../assets/img/profile-picture.png";
import Modal from "./Modal";

const CourseCard = ({ course }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (modalIsOpen) {
    document.body.classList.add("body-active-modal");
  } else {
    document.body.classList.remove("body-active-modal");
  }

  return (
    <>
      <div className="card-course">
        <div className="color-part-1">
          <div className="image-content">
            <div className="card-img-container">
              <div className="card-img">
                <img src={profilePicture} alt="profile-user" />
              </div>
            </div>
          </div>
        </div>

        <div className="color-part-2">
          <div className="star">
            <p>5.0</p>
          </div>
          <div className="info-content">
            <div className="name">
              {course.user.first_name} {course.user.last_name}
            </div>
            <div className="course-title">
              <h2>{course.title}</h2>
            </div>

            <div className="footer">
              <p>{course.price} h</p>
              <button className="more-btn" onClick={openModal}></button>
            </div>
          </div>
        </div>
      </div>

      {modalIsOpen && <Modal course={course} closeModal={closeModal} />}
    </>
  );
};

export default CourseCard;
