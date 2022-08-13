import { Component } from "react";
class Counter extends Component{
    constructor(props){
        super()
        this.state = {counter:+props.appCounter,boom:""}
        this.AddCounterToOne = this.AddCounterToOne.bind(this)
        this.removeCounterInOne = this.removeCounterInOne.bind(this)
        this.resetToZero = this.resetToZero.bind(this)
    }
 
    AddCounterToOne(){
        this.state.counter+=1;
        if(this.state.counter % 7 === 0){
            this.setState({boom:"boom"})
        }else{
            this.setState({boom:""})
        }

    }

    removeCounterInOne(){
        this.setState({counter:this.state.counter-1})
    }

    resetToZero(){
        this.setState({counter:this.state.counter = 0})
    }

    render(){
        return (<div>
            {this.state.counter}
              <button onClick={this.AddCounterToOne}>AddOne</button>
              <button onClick={this.removeCounterInOne}>RemoveOne</button>
              <button onClick={this.resetToZero}>Reset to zero</button>
              <h1>{this.state.boom}</h1>
            </div>
          )
    }

}
export default Counter;