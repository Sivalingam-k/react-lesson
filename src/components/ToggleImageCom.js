import React, { Component } from 'react'
// import staticData from "../shared/constant/constantData";

export class ToggleImageCom extends Component {



    constructor(props) {
        super(props)

        this.state = {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq1ZIoTsQHJEQvRvghZGfQtN6tANTBVCcHw&s",
            name: "Tiger"
        }
    }

    change = () => {
        if(this.state.name==="tiger"){
           
        this.setState({image:this.state.image="https://chybmedia.s3.ap-south-1.amazonaws.com/models/bikes/apache-rtr-160-3-93.jpg"});
        this.setState({name:this.state.name="HAi"});
      

        console.log("bIke")
        }else{
            console.log("bye");
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.image} alt="" />
                <h2>{this.state.name}</h2>
                <button type="button" onClick={() => this.change()}>ChangeImage</button>

            </div>
        )
    }
}

export default ToggleImageCom;
