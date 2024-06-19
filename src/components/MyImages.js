import React, { Component, Fragment } from "react";
import Tiger from '../shared/images/tiger-shroff.jpg'
import Ram from '../shared/images/RamCharan.avif'
import staticData from "../shared/constant/constantData";
class MyImages extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render(){
        return(
            <Fragment>
                <h2>Image Component Working Here!!!!</h2>

            <img src={Tiger} alt="Loading..." height="200px" width="200px"/>&nbsp;&nbsp;&nbsp;
            <img src={Ram} alt="Loading..." height="200px" width="200px"/>

            <hr/>
            <img src={staticData.tiger} alt="Loading..." height="200px" width="200px"/>&nbsp;&nbsp;&nbsp;
            <img src={staticData.ram} alt="Loading..." height="200px" width="200px"/>
       </Fragment> )
    }

}
export default  MyImages;