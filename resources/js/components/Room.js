import React, { useState } from "react";
import NavList from "./NavList"; 


export default function Home() {
    const [building, setBuilding] = useState('');
    const [floor, setFloor] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="room">
   
            <br />
            <h1>Manage Room</h1>

            <br />
            <label htmlFor="room">Room</label> <br />
            <input type="text" /> <button>Search</button> <br /><br />
            <div className="room_list">
                <label htmlFor="room_list">This is where selected rooms are listed (PLACEHOLDER)</label> 
                <button>Edit</button> 
                <button>Trash</button>
            </div>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="bldg">
                                Building <br />
                                <select name="bldg" id="bldg" value={building} onChange={(e) => setBuilding(e.target.value)}>
                                    <option hidden disabled value=""> --Select a Building-- </option> 
                                    <option value="cb">CB</option>
                                    <option value="cbe">CBE</option>
                                    <option value="cbs">CBS</option>
                                </select>
                            </label>
                        </td>
                        
                        <td>
                            <label htmlFor="floor">
                                Floor Level <br />
                                <select name="floor" id="floor" value={floor} onChange={(e) => setFloor(e.target.value)}>
                                    <option hidden disabled value=""> --Select a Floor Level-- </option>
                                    <option value="first">1st Floor</option>
                                    <option value="second">2nd Floor</option>
                                    <option value="third">3rd Floor</option>
                                    <option value="fourth">4th Floor</option>
                                </select><br />
                            </label>
                        </td>

                        <td>
                            <label htmlFor="room">
                                Room Name <br />
                                <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button>Save</button> 
            <button>Clear</button>
        </div>
    );
}
