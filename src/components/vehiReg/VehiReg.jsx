import React from 'react';
import { DropdownButton,Dropdown,Button } from 'react-bootstrap';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {PermMedia, Label, Room, EmojiEmotions, ArrowDropDownCircle} from "@material-ui/icons"
import './vehiReg.css'


function VehiReg(props) {
    return (
        <div className="container">
            <div className="register-box">
                <div className="Top">
                    <div className="box">
                        <input placeholder="Enter the licence plate number "
                               className="input2" />
                    </div>
                </div>
                <div className="box">
                    <input placeholder="Enter the owners name "
                           className="input2" />
                </div>
                <div className="box">
                    <input placeholder=" Manufactured Year "
                           className="input2" />
                </div>
                <div className="box">
                    <input placeholder="Manufacturer"
                           className="input2" />
                </div>
                <div className="box">
                    <input placeholder="Color of the vehicle "
                           className="input2" />
                </div>

                <Dropdown className="drop">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Vehicle Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Car</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Van</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bus</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Lorry</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Three-weeler</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bike</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>



                <div className="regbuttonContainer">
                    <button className="Button">Register Vehicle</button>
                </div>
            </div>

        </div>
    );
}

export default VehiReg;