import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="profile">
            <NavList />
            <br />
            <h1>Profile</h1>
            <NavList_Return />
            <br />
            <p>First Name</p>
            <input />
            <br /><br />
            <p>Middle Name</p>
            <input />
            <br /><br />
            <p>Last Name</p>
            <input />
            <br /><br />
            <select name="department" id="department">
                <option hidden disabled selected value>Department</option>
                <option value="csp">CSP</option>
                <option value="bap">BAP</option>
                <option value="nursing">Nursing</option>
            </select>
            <br /><br />
            <button>Save</button> <button>Reset</button>
        </div>
    );
}