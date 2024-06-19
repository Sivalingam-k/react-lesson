import React, { Component } from "react";

class MethodEvent extends Component {

    greeting = () => {
        window.alert("Good AfterNoon Freiends");
    }
    welcome = (...std) => {
        window.alert(`Welcome You ${std}`);
    }
    render() {
        return (
            <div>
                <h1> if you Click this you will see the Windows Alert!</h1>
                <button type="button" onClick={()=>this.greeting()}>Greeting</button>
                <button type="button" onClick={()=>this.welcome()}>Welcome</button>
                <button type="button" onMouseOver={()=>this.greeting()}>Hover on me to Call Greting Method</button>
            </div>)
    }
}
export default MethodEvent;