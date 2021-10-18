import "./navigation.css"
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import React from "react";

function Navigation(props) {
    return (
        <div className="topbarcontainer">
           <div className="navLeft">
               <Link className="topic" to="/">Vehicle Registration</Link>
           </div>
            <div className="navCenter">

            </div>

            <div className="navRight">
                <div className="rightContainer">
                    <span className="log"> {props.log}</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation
