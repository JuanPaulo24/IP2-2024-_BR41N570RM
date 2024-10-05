import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="enlistment">
            <NavList />
            <br />
            <h1>Enlistment Management</h1>
            <NavList_Return />
            <br />
        </div>
    );
}