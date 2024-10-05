import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Department from "./Department";
import Subject from "./Subject";
import Room from "./Room";
import Building from "./Building&Floor";
import Enlistment from "./Enlistment";

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
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Dashboard/Profile" element={<Profile />} />
                <Route path="/Dashboard/Department" element={<Department />} />
                <Route path="/Dashboard/Subject" element={<Subject />} />
                <Route path="/Dashboard/Room" element={<Room />} />
                <Route path="/Dashboard/Building" element={<Building />} />
                <Route path="/Dashboard/Enlistment" element={<Enlistment />} />

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
