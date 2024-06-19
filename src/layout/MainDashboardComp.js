import React from 'react'
import {Outlet} from 'react-router-dom'
import NavComp from "../layout/NavComp"
import FooterComp from "../layout/FooterComp"
const MainDashboardComp = () => {
    return (
        <div className="container">
            <h2>MainDashboard Working!!!</h2>

            <div className='card border-primary'>
                <div className='card-header border-primary'>Header</div>
                <div className='card-nav border-primary'><NavComp/></div>
                <div className='card-body border-primary'>
                <Outlet></Outlet>
                </div>
                <div className='card-footer border-primary'><FooterComp></FooterComp></div>
            </div>
           
        </div>
    )
}

export default MainDashboardComp
