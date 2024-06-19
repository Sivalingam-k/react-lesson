import React, { Component } from 'react'

const HOCComp = (Wrapper) => {

    class Hoc extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
            }
        }
        countIncrease = () => {
            this.setState({ count: this.state.count + 1 })
        }

        render() {
            return (<Wrapper count={this.state.count} countIncrease={this.countIncrease}></Wrapper>)
        }
    }
   
  

return Hoc
}

export default HOCComp
