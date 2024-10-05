import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="building">
            <NavList />
            <br />
            <h1>Manage Building</h1>
            <NavList_Return />
            <br />
            <label htmlFor="building">Building</label> <br />
            <input type="text" /> <button>Search</button> <br /><br />
            <div className="bldg_list">
                <label htmlFor="bldg_list">This is where buildings are listed (PLACEHOLDER)</label> 
                <button>Edit</button> 
                <button>Trash</button>
            </div>
            <br />
            <input type="text" />
            <br /><br />
            <button>Save</button> 
            <button>Clear</button>
            <br /><br /><br />
            <h1>Manage Floors</h1>
            <label htmlFor="floors">Floors</label> <br />
            <input type="text" /> <button>Search</button> <br /><br />
            <div className="floor_list">
                <label htmlFor="floor_list">This is where floors are listed (PLACEHOLDER)</label> 
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
