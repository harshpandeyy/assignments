import React, { Component } from 'react'

export default class UserInputNum extends Component {
  state: {
    inputValue: any;
    array: any;
    text: string;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
      text: 'luffy',
      array: []
    }
  }



  handleText = () => {
    let arr = []
    for (let i = 0; i <this.state.inputValue; i++) {
      arr.push(this.state.text)
    }
    this.setState({ array: arr });
  }

  render() {
    return (
      <div className="num-container">
        <div className='num-input-container'>
          <div className="num-list-container">
            {this.state.array.map((item: any, index: any) => {
              return (
                <p key={index}>{item}</p>
              )

            })}
          </div>
          <input
            className="input"
            type='text'
            value={this.state.inputValue}
            placeholder='Enter text here'
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />

          <button className="input-num-button" onClick={this.handleText}>Submit</button>        
        </div>
      </div>
    )
  }
}
