import React from "react";
import { Link } from "react-router-dom";

export default function NavList_Dashboard() {
    return (
        <nav>
            <Link to="/Dashboard/Profile">Profile</Link> <br />
            <Link to="/Dashboard/Department">Department</Link> <br />
            <Link to="/Dashboard/Subject">Subject</Link> <br  />
            <Link to="/Dashboard/Room">Manage Room</Link> <br />
            <Link to="/Dashboard/Building">Manage Building and Floors</Link> <br />
            <Link to="/Dashboard/Enlistment">Enlistment Management</Link>
        </nav>
    );
}
