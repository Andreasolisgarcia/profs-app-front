import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Teachers from './pages/Teachers';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
