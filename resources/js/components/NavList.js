import React from "react";
import { Link } from "react-router-dom";
import fsuuLogo from "/../images/fsuu-logo-01.svg"; 

export default function NavList() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={fsuuLogo} alt="https://www.urios.edu.ph/" className="d-inline-block align-text-top" style={{ width: "280px", height: "80px" }} />
                </Link>
                <button className="navbar-toggler navbar-toggler-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/academics">
                                Academics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">
                                Contacts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news-updates">
                                News & Updates
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
