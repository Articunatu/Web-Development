import './App.css';
import React from 'react';
import Experience from './components/Experience';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return(
    <div className="App">
      <Routes>
        <Route exact path="web-development" />
        <Route path="/web-development" element={<Home />} />
        <Route path="/web-development/experience" element={<Experience />} />
        <Route path="/web-development/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App