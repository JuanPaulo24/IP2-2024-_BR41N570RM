import React, { useState } from 'react';
import DashList from './DashList';  // Importing DashList for navigation

const FacultyList = () => {
    // Example Faculty Data (Hardcoded based on the schema from the image)
    const [facultyData, setFacultyData] = useState([
        {
            faculty_id: 1,
            username: 'jdoe',
            faculty_name: 'John Doe',
            faculty_position: 'Professor',
            faculty_contact: '123-456-7890',
            faculty_address: '123 Elm St, Springfield',
            faculty_enlist_status: 'Active',
            faculty_photo: '../../images/fsuu-logo-01.svg' // Placeholder for the photo id or path
        },
        {
            faculty_id: 2,
            username: 'asmith',
            faculty_name: 'Alice Smith',
            faculty_position: 'Assistant Professor',
            faculty_contact: '987-654-3210',
            faculty_address: '456 Oak St, Shelbyville',
            faculty_enlist_status: 'Inactive',
            faculty_photo: '../../images/fsuu-logo-01.svg'
        },
        {
            faculty_id: 3,
            username: 'bjohnson',
            faculty_name: 'Bob Johnson',
            faculty_position: 'Lecturer',
            faculty_contact: '555-123-4567',
            faculty_address: '789 Maple St, Capital City',
            faculty_enlist_status: 'Active',
            faculty_photo: '../../images/fsuu-logo-01.svg'
        }
    ]);

    const [showSaveModal, setShowSaveModal] = useState(false); // Save Changes modal state
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Delete modal state
    const [facultyToDelete, setFacultyToDelete] = useState(null); // Track which faculty to delete
    const [notification, setNotification] = useState(''); // Notification state

    // Function to handle delete action
    const handleDelete = (faculty_id) => {
        setFacultyToDelete(faculty_id);
        setShowDeleteModal(true); // Show delete confirmation modal
    };

    // Function to confirm deletion
    const confirmDelete = () => {
        const updatedFacultyData = facultyData.filter(faculty => faculty.faculty_id !== facultyToDelete);
        setFacultyData(updatedFacultyData);
        setShowDeleteModal(false); // Hide modal after deletion
        setNotification('Deleted Successfully');
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    // Function to handle save changes action
    const handleSaveChanges = () => {
        setShowSaveModal(true); // Show save changes confirmation modal
    };

    // Function to confirm save changes
    const confirmSaveChanges = () => {
        setShowSaveModal(false); // Hide modal after saving changes
        setNotification('Updated Successfully');
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    return (
        <div className="faculty-list">
            <DashList />  {/* Render the navigation component */}
            <h1>Faculty List</h1>

            {/* Notification */}
            {notification && <div className="notification">{notification}</div>}

            {/* Search input, Search button, and Save Changes button all in one row */}
            <div className="faculty-controls">
                <input type="text" placeholder="Search faculty" />
                <button>Search</button>
                <button onClick={handleSaveChanges}>Save Changes</button>
            </div>

            {/* Table headers for faculty details */}
            <table>
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Photo</th> {/* Displaying photo */}
                        <th>Username</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Enlist Status</th>
                        <th>Actions</th> {/* CRUD operations buttons */}
                    </tr>
                </thead>
                <tbody>
                    {/* Looping through the faculty data and rendering each row */}
                    {facultyData.map(faculty => (
                        <tr key={faculty.faculty_id}>
                            <td>{faculty.faculty_id}</td>
                            <td>
                                {/* Displaying faculty photo */}
                                <img 
                                    src={faculty.faculty_photo} 
                                    alt={`${faculty.faculty_name}'s photo`} 
                                    width="50" 
                                    height="50"
                                />
                            </td>
                            <td>{faculty.username}</td>
                            <td>{faculty.faculty_name}</td>
                            <td>{faculty.faculty_position}</td>
                            <td>{faculty.faculty_contact}</td>
                            <td>{faculty.faculty_address}</td>
                            <td>{faculty.faculty_enlist_status}</td>
                            <td>
                                {/* Edit button (functionality not yet implemented) */}
                                <button>Edit</button>

                                {/* Delete button */}
                                <button onClick={() => handleDelete(faculty.faculty_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Save Changes Modal */}
            {showSaveModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to save changes?</p>
                        <button className="btn-blue" onClick={confirmSaveChanges}>Yes</button>
                        <button className="btn-gray" onClick={() => setShowSaveModal(false)}>No</button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Do you want to delete? This cannot be undone.</p>
                        <button className="btn-blue" onClick={confirmDelete}>Yes</button>
                        <button className="btn-gray" onClick={() => setShowDeleteModal(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyList;
