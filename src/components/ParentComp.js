import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           empName:"Siva",
           empSalary:85000  
        }
    }
    changeData=()=>{
        this.setState({empName:"Ravi"});
        this.setState({empSalary:this.state.empSalary+1000})
    }
    render() {
        return (
            <div>
                <h2>This is Parent Component!!</h2>
                <h2>EMPLOYEE NAME IS :{this.state.empName} AND EMPLOYEE SALARY IS :{this.state.empSalary}</h2>
                
                <button type="button" onClick={()=>this.changeData()}>Change State</button>

                <hr/>
                <ChildComp name={this.state.empName} salary={this.state.empSalary} changeData={this.changeData}></ChildComp>
            </div>
        )
    }
}

export default ParentComp
