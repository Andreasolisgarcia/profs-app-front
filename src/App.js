import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';
import Footer from './components/Footer';

const coursesURL = "https://myprofsapp-api-ab16372e255e.herokuapp.com/courses"

function App() {
  const[courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(coursesURL).then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home courses={courses}/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/courses" element={<Courses courses={courses} />} />

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
