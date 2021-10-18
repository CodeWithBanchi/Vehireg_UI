import React from 'react';
import Navigation from '../../components/NavBar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import './edit.css'
import Feed2 from '../../components/feed2/Feed2'

function Edit(props) {
    return (

        <>
            <Navigation/>
        <div className="edit-container" >
            <Sidebar/>
            <Feed2/>
        </div>
            </>
    );
}

export default Edit;