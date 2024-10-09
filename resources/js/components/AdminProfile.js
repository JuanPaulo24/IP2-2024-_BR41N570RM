import React from "react";
import DashList from "./DashList";

export default function AdminProfile() {
    return (
        <div className="d-flex">
            <DashList />
            <div className="admin-profile-content flex-grow-1 p-4">
                <h1>Admin Profile</h1>
                <p>Welcome to this Website! Thank you for Visiting!</p>
            </div>
        </div>
    );
}
