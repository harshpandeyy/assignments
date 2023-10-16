import React, { Component } from 'react'
import './UserInput.css'

export default class UserInput extends Component {
  state:{
    inputValue:any;
  }
  constructor(props:any){
    super(props);
    this.state={
      inputValue:'',
    }
  }

  render() {
    return (
      <div className="container">
        <div className='input-container'>
          <div className="text"><p>{this.state.inputValue}</p></div>
          <input 
          className="input" 
          type='text' 
          value={this.state.inputValue} 
          placeholder='Enter text here'
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
        </div>
        
      </div>
    )
  }
}
