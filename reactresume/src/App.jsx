import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./components//Home";
import Experience from "./components//Experience";
import Portfolio from "./components//Portfolio";
import Contacts from "./components//Contacts";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="web-development" />
                <Route path="/web-development/" element={<Home />} />
                <Route path="/web-development/expeience" element={<Experience />} />
                <Route path="/web-development/portfolio" element={<Portfolio />} />
                <Route path="/web-development/contacts" element={<Contacts />} />
            </Routes>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Akshar"></link>
        </div>
    );
}

export default App;