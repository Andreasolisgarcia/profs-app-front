import React from "react";

const Modal = ({ course, closeModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal">
          <div class="content">
            <div class="header">
              <h2>{course.title}.</h2>
              <button onClick={closeModal} aria-label="close" className="close">
                ❌
              </button>
            </div>
            <div class="body">
              <p>{course.description}</p>
              <p>$ {course.price} </p>
              <p>$ {course.additional_cost} </p>
              <p>{course.duration} min</p>
              {course.is_online === false && <p>Presentiel</p>}
              {course.is_online === true && <p>Online</p>}
            </div>
            <div class="footer">
              <button className="btn-1 "> Tutor </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
