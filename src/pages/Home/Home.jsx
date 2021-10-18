import React from 'react';
import Navigation from "../../components/NavBar/Navigation";
import SideBar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import './home.css'
import VehiReg from "../../components/vehiReg/VehiReg";
function Home(props) {
    return (
    <>  <Navigation log="Register your Vehicle "/>
        <div className="homeContainer" >
            <SideBar/>
            <Rightbar/>
        </div>
    </>
    );
}

export default Home;