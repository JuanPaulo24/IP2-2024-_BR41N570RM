import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Demo from "./Demo";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Department from "./Department";
import Subject from "./Subject";
import Room from "./Room";
import Building from "./Building&Floor";
import Enlistment from "./Enlistment";


export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Dashboard/Profile" element={<Profile />} />
                <Route path="/Dashboard/Department" element={<Department />} />
                <Route path="/Dashboard/Subject" element={<Subject />} />
                <Route path="/Dashboard/Room" element={<Room />} />
                <Route path="/Dashboard/Building" element={<Building />} />
                <Route path="/Dashboard/Enlistment" element={<Enlistment />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}
