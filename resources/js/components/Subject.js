import React from "react";



export default function Home() {
    return (
        <div className="subject">

            <br />
            <h1>Subject</h1>
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
