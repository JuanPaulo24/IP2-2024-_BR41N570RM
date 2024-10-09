import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Academics from "./Academics";
import Contacts from "./Contacts";
import NewsUpdates from "./NewsUpdates";
import LoginRouters from "./LoginRouters";
import DashRouters from "./DashRouters";  // Import DashRouters

export default function LandingRouters() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news-updates" element={<NewsUpdates />} />
                <Route path="/*" element={<LoginRouters />} />  // Use a different path for LoginRouters
                <Route path="/admin/*" element={<DashRouters />} />  // Use a different path for DashRouters
            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<LandingRouters />, document.getElementById('root'));
}
