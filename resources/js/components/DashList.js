import React from 'react';
import { Link } from 'react-router-dom';

const DashList = () => {
  return (
    <nav className="dashlist">
      <ul>
        <li className="admin-dashboard">
          <Link to="/admin/admin-dashboard">Admin Dashboard</Link>
        </li>
        <li className="admin-overview">
          <Link to="/admin/admin-overview">Admin Overview</Link>
        </li>
        <li className="analytics">
          <Link to="/admin/analytics">Analytics</Link>
        </li>
        <li className="faculty-list">
          <Link to="/admin/faculty-list">Faculty List</Link>
        </li>
        <li className="student-list">
          <Link to="/admin/student-list">Student List</Link>
        </li>
        <li className="subject-manager">
          <Link to="/admin/subject-manager">Subject Manager</Link>
        </li>
        <li className="section-manager">
          <Link to="/admin/section-manager">Section Manager</Link>
        </li>
        <li className="department-manager">
          <Link to="/admin/department-manager">Department Manager</Link>
        </li>
        <li className="building-manager">
          <Link to="/admin/building-manager">Building Manager</Link>
        </li>
        <li className="class-scheduling">
          <Link to="/admin/class-scheduling">Class Scheduling</Link>
        </li>
        <li className="enlistment-manager">
          <Link to="/admin/enlistment-manager">Enlistment Manager</Link>
        </li>
        <li className="admin-profile">
          <Link to="/admin/admin-profile">Admin Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashList;
