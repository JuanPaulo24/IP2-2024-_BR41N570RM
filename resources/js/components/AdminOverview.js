import React from 'react';
import DashList from './DashList';  // Importing DashList for navigation

const AdminOverview = () => {
    return (
        <div className="admin-overview">
            <DashList />  {/* Render the navigation component */}
            <h1>Admin Dashboard Overview</h1>

            <div className="overview-section">
                <h2>Sections</h2>
                <p>Total Sections: {/* Placeholder for sections count */}</p>
            </div>

            <div className="overview-students">
                <h2>Students</h2>
                <p>Total Students: {/* Placeholder for students count */}</p>
            </div>

            <div className="overview-faculty">
                <h2>Faculty</h2>
                <p>Total Faculty: {/* Placeholder for faculty count */}</p>
            </div>

            <div className="overview-enlistments">
                <h2>Enlistments</h2>
                <p>Total Enlistments: {/* Placeholder for enlistments count */}</p>
            </div>
        </div>
    );
};

export default AdminOverview;
