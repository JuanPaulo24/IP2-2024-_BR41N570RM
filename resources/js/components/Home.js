import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import NavList from "./NavList";
import { initializeAOS } from "./Aos"; 
import fsuuLogo from "/../images/fsuu-logo-01.svg"; 
import fsuuCover from "/../images/fsuu-cover-01.svg"; 
import studentModuleImg from "/../images/student-module-01.svg"; 
import facultyModuleImg from "/../images/faculty-module-03.svg";
import adminModuleImg from "/../images/admin-module-02.svg";

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        initializeAOS(); 
    }, []);

    const handleAccessPortal = (role) => {
        navigate(`/login?role=${role}`);
    };

    const handleLogoClick = () => {
        window.location.reload();
    };

    return (
        <div className="Home">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" onClick={handleLogoClick}>
                    <img src={fsuuLogo} alt="FSUU Logo" className="d-inline-block align-top" style={{ height: '40px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavList />
                </div>
            </nav>
            <div className="container-fluid cover-bg p-0" style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
                <div className="cover-container" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
                    <img src={fsuuCover} alt="FSUU Cover" className="img-fluid w-100" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
            </div>
            <div className="container-fluid my-4" style={{ backgroundColor: 'AliceBlue', padding: '20px', borderRadius: '8px' }}>
                <div className="row d-flex align-items-stretch justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex mb-3">
                        <div className="card flex-fill" data-aos="fade-up">
                            <img src={adminModuleImg} className="card-img-top" alt="Admin Module" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Admin Module</h5>
                                <p className="card-text flex-grow-1">
                                    The Admin Module provides tools for managing users, roles, departments, subjects, and more. Navigate through administrative tasks efficiently.
                                </p>
                                <button className="btn btn-primary mt-auto" style={{ width: 'fit-content', alignSelf: 'center' }} onClick={() => handleAccessPortal('administrator')}>Access Portal</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex mb-3">
                        <div className="card flex-fill" data-aos="fade-up" data-aos-delay="100">
                            <img src={facultyModuleImg} className="card-img-top" alt="Faculty Module" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Faculty Module</h5>
                                <p className="card-text flex-grow-1">
                                    The Faculty Module provides access to course management tools, student lists, and more. Manage your classes and student interactions effectively.
                                </p>
                                <button className="btn btn-primary mt-auto" style={{ width: 'fit-content', alignSelf: 'center' }} onClick={() => handleAccessPortal('faculty')}>Access Portal</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex mb-3">
                        <div className="card flex-fill" data-aos="fade-up" data-aos-delay="200">
                            <img src={studentModuleImg} className="card-img-top" alt="Student Module" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Student Module</h5>
                                <p className="card-text flex-grow-1">
                                    The Student Module provides access to essential learning materials, assignments, and student resources. Navigate through various subjects, submit your work, and track your academic progress.
                                </p>
                                <button className="btn btn-primary mt-auto" style={{ width: 'fit-content', alignSelf: 'center' }} onClick={() => handleAccessPortal('student')}>Access Portal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
