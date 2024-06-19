import React, { Fragment } from 'react'
import staticData from '../shared/constant/constantData'
import "./external.css"
import design from './mycss.module.css'

const MyCssComp = () => {
    const textObj={
        color:"green",
        fontsize:"20px",
        backgroundColor:"pink",
       
        
    }
    return (
        <Fragment>
             <h2 style={{color:"yellow",backgroundColor:"grey",textShadow:"5px 2px black"}}>Hello This is Css Component</h2>
             <h2 style={textObj}>Thanks for using this website</h2>
            <img className='imgProp1' src={staticData.ram}/>
            <img className={design.imgProp2} src={staticData.tiger}/>

        </Fragment>
    )
}

export default MyCssComp

