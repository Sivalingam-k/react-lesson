import React from 'react'
import staticData from '../shared/constant/constantData'
const pageNotFoundComp = () => {
    return (
        <div>
            <h2 style={{color:"red",textAlign:"center"}}>404.....................page Not Found</h2>
           
                <img src={staticData.error} alt='Loading' />
           
        </div>
    )
}

export default pageNotFoundComp
