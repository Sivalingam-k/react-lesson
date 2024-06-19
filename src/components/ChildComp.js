import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>This is Child Component!!!!</h2>
            <h2>Name is :{props.name}</h2>
            <h2>Name is :{props.salary}</h2>
            <button type="button" onClick={()=>props.changeData()}>ChangeData</button>
        </div>
    )
}

export default ChildComp
