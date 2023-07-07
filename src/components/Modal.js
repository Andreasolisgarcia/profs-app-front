import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ course, closeModal }) => {

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal">
          <div className="content">
            <div className="header">
              <h2>{course.title}.</h2>
              <button onClick={closeModal} aria-label="close" className="close">
                ❌
              </button>
            </div>
            <div className="body">
              <p>{course.description}</p>
              <p>$ {course.price} </p>
              <p>$ {course.additional_cost} </p>
              <p>{course.duration} min</p>
              {course.is_online === false && <p>Presentiel</p>}
              {course.is_online === true && <p>Online</p>}
            </div>
            <div className="footer">
            <Link to={`/teachers/${course.user_id}`}>
              <button className="btn-1 "> Tutor </button>
              </Link>
              <Link to={`/courses/${course.id}`}>
              <button className="btn-1 "> Course </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
