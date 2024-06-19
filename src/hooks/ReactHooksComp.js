import React from 'react'
import {Outlet, outlet} from 'react-router-dom'
import {Link} from 'react-router-dom';
const ReactHooksComp = () => {
    return (
        <div>
           
            <h2>ReactHooks Component is Working!!</h2>
          <div className='card border-primary'>
            <div className='card-header border-primary' >
            <Link to="useEffect"className='btn btn-danger btn-sm'>Use Effect</Link>{" "}
            <Link to="useState"className='btn btn-success btn-sm'>Use State</Link>{" "}
            </div>
            <div className='card-body border-primary' >  <Outlet></Outlet></div>
          
          </div>
         
        </div>
    )
}

export default ReactHooksComp
