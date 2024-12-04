import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/course" element={<Courses/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
       </Routes>
       </div>
    </>
  )
}

export default App
