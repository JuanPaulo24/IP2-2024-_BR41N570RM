import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="subject">
            <NavList />
            <br />
            <h1>Subject</h1>
            <NavList_Return />
            <br />
            <label htmlFor="subject">Subject</label> <br />
            <input type="text" /> <button>Search</button> <br /><br />
            <div className="sub_list">
                <label htmlFor="sub_list">This is where subjects are listed (PLACEHOLDER)</label> 
                <button>Edit</button> 
                <button>Trash</button>
            </div>
            <br />
            <p>Subject Code</p>
            <input type="text" />
            <br /><br />
            <p>Course Title</p>
            <input type="text" />
            <br /><br />
            <p>Course Description</p>
            <input type="text" />
            <br /><br />
            <button>Save</button> 
            <button>Clear</button>
        </div>
    );
}
