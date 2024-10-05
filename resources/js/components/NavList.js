import React from "react";
import { Link } from "react-router-dom";

export default function NavList() {
    return (
        <nav>
            <Link to="/">Demo</Link> <br />
            <Link to="/Dashboard">Dashboard</Link>
        </nav>
    );
}
