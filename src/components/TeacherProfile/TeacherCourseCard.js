import React from 'react';
import { Link } from 'react-router-dom';

const TeacherCourseCard = ({course}) => {
    return (
        <div>
            <div className="card-course">

            <div className="color-part-2">
                <div className="star">
                    <p>5.0</p>
                </div>    
                <div className="info-content">
                    <div className="name"></div>
                    <div className="course-title">
                        <h2>{course.title}</h2>
                    </div>

                    <div className="footer">
                        <p>{course.price} h</p>
                        <Link to={`/courses/${course.id}`}>
                        <button className="btn-1" >About the course</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TeacherCourseCard;