import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';

const coursesURL = "http://127.0.0.1:3000/courses"

function App() {
  const[courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(coursesURL).then((response) => {
      setCourses(response.data);
    });
  }, []);

  console.log(courses);
 
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/courses" element={<Courses courses={courses} />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
