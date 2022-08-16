import { Component } from "react";
import AddUser from "./AddUser.component";
class Home extends Component{
    constructor(props){
        super()
    }
render(){
    return(
        <div>
           <AddUser/> 
        </div>
    )
}
}