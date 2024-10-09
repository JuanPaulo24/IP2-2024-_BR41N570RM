import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";  // Fixed import
import AdminOverview from "./AdminOverview";
import Analytics from "./Analytics";
import FacultyList from "./FacultyList";
import StudentList from "./StudentList";
import SubjectManager from "./SubjectManager";
import SectionManager from "./SectionManager";
import DepartmentManager from "./DepartmentManager";
import BuildingManager from "./BuildingManager";
import ClassScheduling from "./ClassScheduling";
import EnlistmentManager from "./EnlistmentManager";
import AdminProfile from "./AdminProfile";

const DashRouters = () => {
    return (
        <div className="dashboard"> 
            <Routes>
                <Route path="admin-dashboard" element={<AdminDashboard />} />  {/* Fixed syntax */}
                <Route path="admin-overview" element={<AdminOverview />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="faculty-list" element={<FacultyList />} />
                <Route path="student-list" element={<StudentList />} />
                <Route path="subject-manager" element={<SubjectManager />} />
                <Route path="section-manager" element={<SectionManager />} />
                <Route path="department-manager" element={<DepartmentManager />} />
                <Route path="building-manager" element={<BuildingManager />} />
                <Route path="class-scheduling" element={<ClassScheduling />} />
                <Route path="enlistment-manager" element={<EnlistmentManager />} />
                <Route path="admin-profile" element={<AdminProfile />} />
            </Routes>
        </div>
    );
};

export default DashRouters;
