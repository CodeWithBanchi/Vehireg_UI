import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../../components/NavBar/Navigation";
import Sidebar from '../../components/sidebar/Sidebar'
import './view.css'
import ViewComp from '../../components/viewComp/ViewComp'
import Feed from '../../components/feed/Feed'

function View(props) {
    return (
      <>
      <Navigation/>
      <div className="view-container">
          <Sidebar/>
           <Feed/>

      </div>

      </>
    );
}

export default View;