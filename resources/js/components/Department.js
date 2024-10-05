import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="department">
            <NavList />
            <br />
            <h1>Department</h1>
            <NavList_Return />
            <br />
            <div className="Dep_List">
                <label htmlFor="Dep_List">This is where departments are listed (PLACEHOLDER)</label> 
                <button>Edit</button> 
                <button>Trash</button>
            </div>
            <br />
            <input type="text" />
            <br /><br />
            <button>Save</button> 
            <button>Clear</button>
        </div>
    );
}
