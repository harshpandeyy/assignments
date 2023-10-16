import React, { Component } from 'react'
import './UserAppend.css'

export default class UserAppend extends Component {
  state:{
    inputValue:string;
    text:string;
    prevText:string;
  }
  constructor(props:any){
    super(props);
    this.state={
      inputValue:'',
      text:'',
      prevText:''
    }
  }
  

  componentDidUpdate(prevProps:any,prevState:any) {
    if(this.state.text!==prevState.text){
      this.setState({prevText:prevState.text})
    }
  }

  changeText=()=>{
    this.setState((prevState:any)=>({
      text:this.state.inputValue
    }))
  }


  render() {
    return (
      <div className="appendContainer">

        <div className="appendTextBox">{this.state.prevText}{this.state.text}</div>
        
        <div className="appendBody">
          <input className="appendInput" type="text" placeholder='Enter text here' value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
          <button className="appendButton" onClick={this.changeText}>Submit</button>
        </div>
       
      </div>
      
    )
  }
}
