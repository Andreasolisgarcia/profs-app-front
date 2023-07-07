import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeacherCourseCard from "../components/TeacherProfile/TeacherCourseCard";

const TeacherProfile = () => {
  const params = useParams();
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/teachers/${params.teacherId}`)
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.teacherId]);

  const courses = teacher.created_courses || [];

  return (
      <div>
        <p>
        {teacher.first_name}
         {teacher.last_name}
        </p>
     
        <div className="container">
        {courses.map((course) => (
          <TeacherCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default TeacherProfile;