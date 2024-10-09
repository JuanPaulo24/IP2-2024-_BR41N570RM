import React from 'react';
import DashList from './DashList'; // Importing DashList for navigation

const Analytics = () => {
    return (
        <div className="analytics">
            <DashList />  {/* Render the navigation component */}
            <h1>Analytics Dashboard</h1>

            <div className="analytics-overview">
                <h2>Overview</h2>
                <p>This section will display analytics data.</p>
            </div>

            <div className="analytics-reports">
                <h2>Reports</h2>
                <p>Reports will be available here.</p>
            </div>

            <div className="analytics-charts">
                <h2>Charts</h2>
                <p>Visual representations of data will be shown here.</p>
            </div>
        </div>
    );
};

export default Analytics;
