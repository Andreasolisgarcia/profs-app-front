import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import TeacherProfile from "./pages/TeacherProfile";
import Course from "./pages/Course";

const coursesURL = "http://127.0.0.1:3000/courses";


function App() {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    axios.get(coursesURL).then((response) => {
      setCourses(response.data);
    });
  }, []);

  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/teachers/:teacherId" element={<TeacherProfile />}/>
          <Route path="/courses/:courseId" element={<Course />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
