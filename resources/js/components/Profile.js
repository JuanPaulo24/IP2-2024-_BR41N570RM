import React, { useState } from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ firstName, middleName, lastName, department });
    };

    const handleReset = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDepartment('');
    };

    return (
        <div className="profile">
            <NavList />
            <br />
            <h1>Profile</h1>
            <NavList_Return />
            <br />
            <form onSubmit={handleSubmit}>
                <p>First Name</p>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br /><br />
                <p>Middle Name</p>
                <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                <br /><br />
                <p>Last Name</p>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <br /><br />
                <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option hidden disabled value="">Department</option>
                    <option value="csp">CSP</option>
                    <option value="bap">BAP</option>
                    <option value="nursing">Nursing</option>
                </select>
                <br /><br />
                <button type="submit">Save</button> 
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}
