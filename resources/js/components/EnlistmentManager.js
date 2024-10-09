import React from "react";
import DashList from "./DashList";

export default function BuildingManager() {
    return (
        <div className="d-flex">
            <DashList />
            <div className="building-manager-content flex-grow-1 p-4">
                <h1>2</h1>
                <p>Welcome to this Website! Thank you for Visiting!</p>
            </div>
        </div>
    );
}
