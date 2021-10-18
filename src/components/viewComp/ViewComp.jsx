import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./viewComp.css"
import axios from "axios";
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchIcon from "@mui/icons-material/Search";

class ViewComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            registrations:[]
        };
    }
    componentDidMount() {
        this.fetchRegistrations();
    }

    fetchRegistrations(){
        axios.get("http://localhost:8080/registrations").then(res=>{
            if(res.data.success){
                this.setState({
                    registrations:res.data.availableRegistrations
                });
                console.log(this.state.registrations);
            }
        })
    }

    deleteReg = (id) => {
        axios.delete(`/registrations/delete/${id}`).then((res)=>{
            alert("Registration Deleted");
            this.fetchRegistrations();
        })
    }
    filtering(registrations,searchtext){
        const result = registrations.filter((registrations)=>
            registrations.plateNo.includes(searchtext)
        )
        this.setState({registrations:result})
    }

    takeSearch= (e) =>{
        console.log(e.currentTarget.value);
        const searchtext=e.currentTarget.value;

        axios.get("http://localhost:8080/registrations").then(res=>{
            if(res.data.success) {
                this.filtering(res.data.availableRegistrations,searchtext)
            }
        })
    }

    render() {
        return (

            <div className="main-container">
                <div className="searchContainer">
                    <div className="searchbox" >
                        <SearchIcon className="searchIcon"/>
                        <input onChange={this.takeSearch} placeholder="Enter Licence Plate no to search " className="searchInput"/>
                    </div>
                </div>
                {this.state.registrations.map(registrations =>(
                    <div className="viewBox">

                        <div className="topContainer">
                            <span className="vehiName">{registrations.vehicle}</span>

                        </div>
                        <div className="inputCouple">
                    <span className="input1">
                        License Plate no :
                    </span>
                            <span className="input2">
                         {registrations.plateNo}
                    </span>
                        </div>
                        <div className="inputCouple">
                    <span className="input1">
                        Owners Name :
                    </span>
                            <span className="input2">
                        {registrations.owner}
                    </span>
                        </div>
                        <div className="inputCouple">
                    <span className="input1">
                        Owners Id no:
                    </span>
                            <span className="input2">
                        {registrations.ownerId}
                    </span>
                        </div>
                        <div className="inputCouple">
                    <span className="input1">
                        Manufacture  :
                    </span>
                            <span className="input2">
                         {registrations.manufacturer}
                    </span>
                        </div>
                        <div className="inputCouple">
                    <span className="input1">
                        Manufacuredd Year :
                    </span>
                            <span className="input2">
                         {registrations.manufacturedYear}
                    </span>
                        </div>

                        <div className="inputCouple">
                    <span className="input1">
                        Vehilce Color:
                    </span>
                            <span className="input2">
                         {registrations.color}
                    </span>
                        </div>

                        <div className="updater">
                            <div className="edit">
                             <Button variant="primary" href={`/edit/${registrations._id}`}>Edit </Button>
                            </div>
                            <div className="delete">
                                <Button variant="danger" onClick={()=> this.deleteReg(registrations._id)}>Delete</Button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}


export default ViewComp;
