import React from "react";
import NavList from "./NavList"; 
import NavList_Return from "./NavList_Return";

export default function Home() {
    return (
        <div className="room">
            <NavList />
            <br />
            <h1>Manage Room</h1>
            <NavList_Return />
            <br />
            <label for="room">Room</label> <br />
            <input></input> <button>Search</button> <br /><br />
            <div className="room_list">
                <label for="room_list">This is where selected rooms are listed (PLACEHOLDER)</label> <button>Edit</button> <button>Trash</button>
            </div>
            <br />
            <table>
                <tr>
                    <td>
                        <label for="bldg">
                            Building <br />
                            <select name="bldg" id="bldg">
                                <option hidden diasbled selected value> --Select a Building-- </option> 
                                <option value="cb">CB</option>
                                <option value="cbe">CBE</option>
                                <option value="cbs">CBS</option>
                            </select>
                        </label>
                    </td>
                    
                    <td>
                        <label for="floor">
                            Floor Level <br />
                            <select name="floor" id="floor">
                                <option hidden disabled selected value> --Select a Floor Level-- </option>
                                <option value="first">1st Floor</option>
                                <option value="second">2nd Floor</option>
                                <option value="third">3rd Floor</option>
                                <option value="fourth">4th Floor</option>
                            </select><br />
                        </label>
                    </td>

                    <td>
                        <label for="room">
                            Room Name <br />
                            <input></input>
                        </label>
                    </td>
                </tr>
            </table>
            <br />
            <button>Save</button> <button>Clear</button>
        </div>
    );
}