import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Experience from './components/Experience';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return(
    <div className="App">
      <Routes>
        <Route exact path="Web-Development" />
        <Route path="/Web-Development" element={<Home/>} />
        <Route path="/Web-Development/home" element={<Home/>} />
        <Route path="/Web-Development/experience" element={<Experience/>} />
        <Route path="/Web-Development/portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  )
}

export default App;