import React, { Component } from "react";

class SetStateComp extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            name:"siva",
           FullName:"sivaLingam"
        }
    }
    CountInc =()=>{
        //this.setState((prevState)=>({count:prevState.count+1})); INDIRECT METHOD
        this.setState({count:this.state.count+1}); //DIRECT METHOD
    }
    CountDec =()=>{
         //this.setState((prevState)=>({count:prevState.count-1})); INDIRECT METHOD
        this.setState({count:this.state.count-1});//DIRECT METHOD
    }
    FullName=()=>{
        this.setState({name:this.state.FullName});
    }
    render(){
        return (
            <div>
                <p>This is SET STATE COMPONENT !!</p>
                <h2> The Count Value Is:{this.state.count}</h2>
                <h2> Click the "NameChange" Button to see Full Name:&nbsp;&nbsp;&nbsp;{this.state.name}</h2>
            <button type="button" onClick={()=>this.CountInc()}>Increase</button>
            <button type="button" onClick={()=>this.CountDec()}>Decrease</button>
            <button type="button" onClick={()=>this.FullName()}>Namechange</button>

            </div>
        )
    }
}
export default SetStateComp;