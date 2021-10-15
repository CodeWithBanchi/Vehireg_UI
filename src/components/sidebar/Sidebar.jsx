import React from 'react';
import './sidebar.css'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className="sidebarContainer">
          <div className="option">
            <div className="optionContent">
                <DriveEtaIcon/>
                <Link to="/View">Viw registered vehicles</Link>
            </div>
          </div>

            <div className="option">
                <div className="optionContent">
                    <DriveEtaIcon/>
                    <span>Pending registration vehicles </span>
                </div>
            </div>
            <div className="option">
                <div className="optionContent">
                    <DriveEtaIcon/>
                    <span>Edit / Update registrations </span>
                </div>
            </div>
            <div className="option">
                <div className="optionContent">
                    <DriveEtaIcon/>
                    <span>Delete Registrations </span>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;