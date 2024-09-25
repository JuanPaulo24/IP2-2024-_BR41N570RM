import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Demo from "./Demo";


export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}
