import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = ({ courses }) => {
  
    return (
      <>
      <header className=" header-courses-container">
      <div className="text-container">
      <h2>What would you like to learn now ?</h2>
          <div className="search-bar-container">
              <input type="text"/>
          </div>
      </div>
  </header>

    <div class="container">
     
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
    </>
    );
};

export default Courses;