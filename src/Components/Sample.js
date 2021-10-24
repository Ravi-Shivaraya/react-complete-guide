import React, { Component } from "react";
export default class Sample extends Component {
    state = {
        a:'This is from State attribute'
    };
    handleClick=()=>{
        console.log("Inside click method");
        this.setState({a:"you Clicked Button"});
    };
    render(){
        return(
        <div><h1>{this.state.a}</h1>
        <button type="button" onClick={this.handleClick}>Click here</button>
        </div>);
    };
}