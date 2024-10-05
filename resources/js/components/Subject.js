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
            <label for="subject">Subject</label> <br />
            <input></input> <button>Search</button> <br /><br />
            <div className="sub_list">
                <label for="sub_list">This is where subjects are listed (PLACEHOLDER)</label> <button>Edit</button> <button>Trash</button>
            </div>
            <br />
            <p>Subject Code</p>
            <input />
            <br /><br />
            <p>Course Title</p>
            <input />
            <br /><br />
            <p>Course Description</p>
            <input />
            <br /><br />
            <button>Save</button> <button>Clear</button>
        </div>
    );
}