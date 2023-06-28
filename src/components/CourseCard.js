import React from 'react';
import profilePicture from '../assets/img/profile-picture.png'

const CourseCard = ({ course }) => {
    return (
        <>
        <div className="card-course">
            <div className="color-part-1">
                <div className="image-content">
                    <div className="card-img-container">
                         <div className="card-img">
                         <img src= {profilePicture} />
                        </div>                
                    </div>
                </div>

            </div>

            <div className="color-part-2">
                <div className="star">
                    <p>5.0</p>
                </div>    
                <div className="info-content">
                    <div className="name">{course.teacher.contact_info.first_name} {course.teacher.contact_info.last_name}</div>
                    <div className="course-title">
                        <h2>{course.title}</h2>
                    </div>

                    <div className="footer">
                        <p>{course.price} h</p>
                        <button className="more-btn"></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CourseCard;