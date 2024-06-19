import React, { Component } from "react";

class ClassComp extends Component {

    constructor() {
        super();
        this.State = {
            company: "changePond",
            salary: 25000,
        }
    }


    render() {
        const { myName, post } = this.props;//Destructuring Of Props
        const { company, salary } = this.State;//Destructuring of State
        return <div>
            <h2>This is class Componen !!!!</h2>
            {/* Accessing props data */}
            {/* <p>My Name is : {this.props.myName} , post is :{this.props.post}</p> */}

            <p>My Name is : {myName} , post is :{post}</p>

            {/* Accessing State data */}
            {/* <p>Company Name: {this.State.company} , Salary is :{this.State.salary}</p> */}

            <p>Company Name: {company} , Salary is :{salary}</p>
        </div>
    }
}
export default ClassComp