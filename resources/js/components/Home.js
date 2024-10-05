import React from "react";
import NavList from "./NavList"; 
import fsuuCover from "/../images/fsuu-cover-01.svg"; // Adjust the path if necessary

export default function Home() {
    return (
        <div className="Home">
            <NavList />
            <div className="cover-bg">
                <div className="cover-container">
                    <img src={fsuuCover} alt="FSUU Cover" className="img-fluid" />
                </div>
            </div>
            <div className="container-fluid text-center my-4"> {}
                <button className="btn btn-primary">Student Module</button>
            </div>
        </div>
    );
}
