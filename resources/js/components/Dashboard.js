import React from "react";
import NavList from "./NavList"; 
import NavList_Dashboard from "./NavList_Dashboard";

export default function Home() {
    return (
        <div className="dashboard">
            <NavList />
            <br />
            <h1>Dashboard</h1>
            <NavList_Dashboard />
        </div>
    );
}