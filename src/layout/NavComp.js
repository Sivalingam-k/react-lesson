import { Button } from 'bootstrap';
import React from 'react'
import {Link} from 'react-router-dom';
const NavComp = () => {
    return (
        <div>
          
           <Link to="mySlider"className='btn btn-danger btn-sm'>MySlider</Link>{" "}
           <Link to="myImages"className='btn btn-info btn-sm'>MyImages</Link>{" "}
           <Link to="parent"className='btn btn-warning btn-sm'>Parent</Link>{" "}
           <Link to="reactHook"className='btn btn-primary btn-sm'>Hooks</Link>{" "}
           
        </div>
    )
}

export default NavComp
