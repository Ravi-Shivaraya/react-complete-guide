import React,{Component} from "react";
import Child from "./Child";
import Demo1 from "./Demo1";
export default class Parent extends Component{
    render() {  
        return(
            <div><h1>This is from Parent</h1>
            <Child Title="This is from Title"></Child>
            <Demo1 Title="This is from functinal Component text "></Demo1>
            </div>
            
            );

    }

}