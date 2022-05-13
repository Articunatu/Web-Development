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
        <Route exact path="react-task-tracker" />
        <Route path="/react-task-tracker" element={<Home/>} />
        {/* <Route path="/react-task-tracker/home" element={<Home/>} /> */}
        <Route path="/react-task-tracker/experience" element={<Experience/>} />
        <Route path="/react-task-tracker/portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  )
}

export default App;