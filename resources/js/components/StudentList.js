import React, { useState } from 'react';
import DashList from './DashList';  // Importing DashList for navigation

const StudentList = () => {
    // Example Student Data (Hardcoded based on the schema from the image)
    const [studentData, setStudentData] = useState([
        {
            student_id: 1,
            username: 'mjones',
            student_name: 'Mary Jones',
            student_course: 'BS Computer Science',
            student_year_level: 2,
            student_contact: '111-222-3333',
            student_address: '123 Cedar St, Springfield',
            student_enlist_status: 'Active',
            student_photo: '../../images/fsuu-logo-01.svg' // Placeholder for the photo id or path
        },
        {
            student_id: 2,
            username: 'rlee',
            student_name: 'Robert Lee',
            student_course: 'BS Information Technology',
            student_year_level: 3,
            student_contact: '444-555-6666',
            student_address: '789 Birch St, Shelbyville',
            student_enlist_status: 'Inactive',
            student_photo: '../../images/fsuu-logo-01.svg'
        },
        {
            student_id: 3,
            username: 'lkim',
            student_name: 'Lisa Kim',
            student_course: 'BS Mathematics',
            student_year_level: 4,
            student_contact: '777-888-9999',
            student_address: '456 Pine St, Capital City',
            student_enlist_status: 'Active',
            student_photo: '../../images/fsuu-logo-01.svg'
        }
    ]);

    const [showSaveModal, setShowSaveModal] = useState(false); // Save Changes modal state
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Delete modal state
    const [studentToDelete, setStudentToDelete] = useState(null); // Track which student to delete
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Success modal state
    const [notificationMessage, setNotificationMessage] = useState(''); // Notification message state

    // Function to handle delete action
    const handleDelete = (student_id) => {
        setStudentToDelete(student_id);
        setShowDeleteModal(true); // Show delete confirmation modal
    };

    // Function to confirm deletion
    const confirmDelete = () => {
        const updatedStudentData = studentData.filter(student => student.student_id !== studentToDelete);
        setStudentData(updatedStudentData);
        setShowDeleteModal(false); // Hide modal after deletion
        setNotificationMessage('Deleted Successfully');
        setShowSuccessModal(true); // Show success modal
    };

    // Function to handle save changes action
    const handleSaveChanges = () => {
        setShowSaveModal(true); // Show save changes confirmation modal
    };

    // Function to confirm save changes
    const confirmSaveChanges = () => {
        setShowSaveModal(false); // Hide modal after saving changes
        setNotificationMessage('Updated Successfully');
        setShowSuccessModal(true); // Show success modal
    };

    // Function to close success modal
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        setNotificationMessage(''); // Clear message
    };

    return (
        <div className="student-list">
            <DashList />  {/* Render the navigation component */}
            <h1>Student List</h1>

            {/* Search input, Search button, and Save Changes button all in one row */}
            <div className="student-controls">
                <input type="text" placeholder="Search student" />
                <button>Search</button>
                <button onClick={handleSaveChanges}>Save Changes</button>
            </div>

            {/* Table headers for student details */}
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Photo</th> {/* Displaying photo */}
                        <th>Username</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Year Level</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Enlist Status</th>
                        <th>Actions</th> {/* CRUD operations buttons */}
                    </tr>
                </thead>
                <tbody>
                    {/* Looping through the student data and rendering each row */}
                    {studentData.map(student => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>
                                {/* Displaying student photo */}
                                <img 
                                    src={student.student_photo} 
                                    alt={`${student.student_name}'s photo`} 
                                    width="50" 
                                    height="50"
                                />
                            </td>
                            <td>{student.username}</td>
                            <td>{student.student_name}</td>
                            <td>{student.student_course}</td>
                            <td>{student.student_year_level}</td>
                            <td>{student.student_contact}</td>
                            <td>{student.student_address}</td>
                            <td>{student.student_enlist_status}</td>
                            <td>
                                {/* Edit button (functionality not yet implemented) */}
                                <button>Edit</button>

                                {/* Delete button */}
                                <button onClick={() => handleDelete(student.student_id)}>Delete</button>
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
                        <button onClick={confirmSaveChanges}>Yes</button>
                        <button onClick={() => setShowSaveModal(false)}>No</button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Do you want to delete? This cannot be undone.</p>
                        <button onClick={confirmDelete}>Yes</button>
                        <button onClick={() => setShowDeleteModal(false)}>No</button>
                    </div>
                </div>
            )}

            {/* Success Notification Modal */}
            {showSuccessModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{notificationMessage}</p>
                        <button onClick={closeSuccessModal}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentList;
