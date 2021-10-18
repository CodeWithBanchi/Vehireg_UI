import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from "react-router";



class EditUpdate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vehicle:"",
            plateNo:"",
            owner:"",
            manufacturer:"",
            manufacturedYear:"",
            color:""
        }

    }


    takInput = (e) => {
        const {name,value}= e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    register = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const {plateNo,owner,manufacturer,manufacturedYear,color,vehicle,ownerId} = this.state;
        const data ={
            plateNo:plateNo,
            owner:owner,
            manufacturer:manufacturer,
            manufacturedYear:manufacturedYear,
            color:color,
            vehicle:vehicle,
            ownerId:ownerId
        }

        console.log(data);
        axios.put(`http://localhost:8080/registrations/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Post Updated");
                this.setState({
                    vehicle:"",
                    plateNo:"",
                    owner:"",
                    manufacturer:"",
                    manufacturedYear:"",
                    color:"",
                    ownerId:""
                })
            }
        })
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/registrations/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    plateNo:res.data.registrations.plateNo,
                    owner:res.data.registrations.owner,
                    manufacturer:res.data.registrations.manufacturer,
                    manufacturedYear:res.data.registrations.manufacturedYear,
                    color:res.data.registrations.color,
                    vehicle:res.data.registrations.vehicle,
                    ownerId:res.data.registrations.ownerId
                })
                console.log(this.state.registrations)
            }
        })
    }


    render() {
        return (
            <div className="container">
                <div className="register-box">
                    <div className="Top">

                        <div className="box">
                            <input placeholder="Enter the licence plate number "
                                   className="input2" name="plateNo" value={this.state.plateNo} onChange={this.takInput} />
                        </div>
                    </div>
                    <div className="box">
                        <input placeholder="Enter the owners name "
                               className="input2" name="owner" value={this.state.owner} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Enter the owners name "
                               className="input2" name="ownerId" value={this.state.ownerId} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder=" Manufactured Year "
                               className="input2" name="manufacturedYear" value={this.state.manufacturedYear} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Manufacturer"
                               className="input2" name="manufacturer" value={this.state.manufacturer} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Color of the vehicle "
                               className="input2" name="color" value={this.state.color} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Vehicle name "
                               className="input2" name="vehicle" value={this.state.vehicle} onChange={this.takInput} />
                    </div>


                    <div className="regbuttonContainer">
                        <button className="Button" onClick={this.register}>Updarte Registration Details </button>
                    </div>
                </div>

            </div>
        );
    }
}


export default withRouter(EditUpdate);
