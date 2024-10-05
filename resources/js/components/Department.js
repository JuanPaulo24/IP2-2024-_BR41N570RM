import React from "react";
import NavList from "./NavList"; 

export default function Home() {
    return (
        <div className="department">
            <br />
            <h1>Department</h1>

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
