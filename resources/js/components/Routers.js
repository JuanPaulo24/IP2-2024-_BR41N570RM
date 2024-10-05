import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Academics from "./Academics";
import Contacts from "./Contacts";
import NewsUpdates from "./NewsUpdates";
import LoginRouter from "./LoginRouter"; 

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news-updates" element={<NewsUpdates />} />
                <Route path="/*" element={<LoginRouter />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}
