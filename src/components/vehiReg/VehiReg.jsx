import React, {Component} from 'react';
import { DropdownButton,Dropdown,Button } from 'react-bootstrap';
import './vehiReg.css'
import axios from 'axios'


class VehiReg extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicle:"",
            plateNo:"",
            owner:"",
            manufacturer:"",
            manufacturedYear:"",
            color:"",
            ownerId:"",

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
        axios.post("http://localhost:8080/registrations/new",data).then((res)=>{
            if(res.data.success){
                  this.setState({
                      vehicle:"",
                      plateNo:"",
                      owner:"",
                      manufacturer:"",
                      manufacturedYear:"",
                      color:"",
                      ownerId:""
                  })
                alert("vehicle registed ")
            }
        })
        const testInput = this.state.plateNo;
        const regex = /ශ්‍රී/;
        const isExisting = regex.test(testInput)
        if(isExisting===true){
            alert("vintage")
        }
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
                        <input placeholder="Vehicle name "
                               className="input2" name="vehicle" value={this.state.vehicle} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Enter the owners name "
                               className="input2" name="owner" value={this.state.owner} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Enter owners id no "
                               className="input2" name="ownerId" value={this.state.ownerId} onChange={this.takInput} />
                    </div>
                    <div className="box">
                        <input placeholder="Manufactured Year "
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


                    <div className="regbuttonContainer">
                        <button className="Button" onClick={this.register}>Register Vehicle</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default VehiReg;
