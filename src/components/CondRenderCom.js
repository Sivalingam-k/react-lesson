import React, { Component } from "react";


class CondRenderCom extends Component{

    constructor(props){
        super(props);
        this.state={
            isCond:true,
        }
    }

    render(){
        //1.Use Of IfElse()
       // let msg=""  //2.Element as Variable
       // if(this.state.isCond){
           // msg="ADMIN LOGIN SUCCESSFULLY!!!"
            // return <h2>Admin Login SuccessFully!!</h2>
       // }else{
            // return <h2>User Login SuccessFully!!</h2>
            // msg="USER LOGIN SUCCESSFULLY!!!"
               
           
       // }
        // 2.Element As Variable
        // return <h2>{msg}</h2>

        //3.Use Of Ternary Operator
        //return this.state.isCond?<h2>Admin Login SuccessFully!!</h2>:<h2>User Login SuccessFully!!</h2>;
       

        // 4.use Of Short-circcuit
        return this.state.isCond && <h2>Admin Login SuccessFully!!</h2>;
    }
}
export default CondRenderCom;