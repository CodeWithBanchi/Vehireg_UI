import React from 'react';
import './sidebar.css'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

function Sidebar(props) {
    return (
        <div className="sidebarContainer">
          <div className="option">
            <div className="optionContent">
                <DriveEtaIcon/>
                <Link className="hyperlink" to="/View">View registered vehicles</Link>
            </div>
          </div>
            <div className="option">
                <div className="optionContent">
                    <EditIcon/>
                    <Link className="hyperlink" to="/View">Edit/Update Registrations</Link>
                </div>
            </div>
            <div className="option">
                <div className="optionContent">
                    <DeleteForeverIcon/>
                    <Link className="hyperlink" to="/View">Delete Registrations</Link>
                </div>
            </div>
            <div className="option">
                <div className="optionContent">
                    <HomeIcon/>
                    <Link className="hyperlink" to="/">HomePage</Link>
                </div>
            </div>
            <Card className="cards" border="danger" style={{ width: '18rem' }}>
                <Card.Header>Notice</Card.Header>
                <Card.Body>
                    <Card.Title>About Site</Card.Title>
                    <Card.Text>
                        This site is only accepting the vehicle registrations in Sri Lanka. If your vehicle is not
                        registered. you can use this service for regitering the vehicles.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default Sidebar;