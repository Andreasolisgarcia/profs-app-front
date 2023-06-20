import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = ({ courses }) => {
  
    return (
      <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
    );
};

export default Courses;