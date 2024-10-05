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
import Programs from "./Programs";
import Contacts from "./Contacts";

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
                <Route path="/programs" element={<Programs />} />
                <Route path="/contacts" element={<Contacts />} />

            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}
