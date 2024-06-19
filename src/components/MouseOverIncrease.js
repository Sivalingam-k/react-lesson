import React, { Component } from 'react'
import HOCComp from './HOCComp'
export class MouseOverIncrease extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0,
    //     }
    // }
    // incre=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render() {
        return (
            <div>
                {/* <h2>Mouse Over Increament:{this.state.count}</h2>
                <button type='button' onMouseOver={()=>this.incre()}>Increase</button> */}
                <h2>Mouse Over Increament:{this.props.count}</h2>
                <button type='button' onMouseOver={()=>this.props.countIncrease()}>Mouse Over Here</button>
            </div>
        )
    }
}

export default HOCComp(MouseOverIncrease)
