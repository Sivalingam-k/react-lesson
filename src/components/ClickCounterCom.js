import React, { Component } from 'react'
import HOCComp from './HOCComp'
export class ClickCounterCom extends Component {
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
                {/* <h2>The Count is :{this.state.count}</h2>
                <button type="button" onClick={()=>this.incre()}>Increase</button> */}


                <h2>The Count is :{this.props.count}</h2>
                <button className="btn btn-primary"type="button" onClick={()=>this.props.countIncrease()}>Increase</button>
            </div>
        )
    }
}

export default HOCComp(ClickCounterCom)
