import React, { Component } from "react";

class MyDetails extends Component{

    constructor() {
        super();
        this.State = {
            gender: "Male",
            MaritalStatus: "Single",
            Address:"Chennai",

        }
    }


    render(){
        const {gender,MaritalStatus,Address}=this.State;
        const{fname,lname,email,contact}=this.props;
        return ( <div>
        <p>First Name:{fname} , Last Name:{lname}  ,Email:{email} , Contact:{contact}</p>
        <p>Gender:{gender} , MaritalStatus:{MaritalStatus} , Address: {Address}</p>
        </div>)
    }
}
export default MyDetails;