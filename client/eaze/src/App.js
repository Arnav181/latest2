import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import CourseDescription from './components/CourseDescription';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/course/:id" element={<CourseDescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
