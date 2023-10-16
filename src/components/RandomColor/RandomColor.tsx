import React, { Component } from 'react'
import { colorData } from './RandomData'
import './Random.css'

export default class RandomColor extends Component {
  state: {
    items: any,
    count:number
  }
  constructor(props: any) {
    super(props);
    this.state = {
      items: ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"],
      count:1
    }
  }

  handleRandom = () => {
   this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div className="random-container">

        <div className="red-heading">
          <p>Random Color List</p>
        </div>

        <div className="random-unordered-container">
          <ul className="random-unordered">
            {
              this.state.items.map((item: any, index: number) => {
                let rend = Math.floor(Math.random() * 255);
                let rend1 = Math.floor(Math.random() * 255);
                let rend2 = Math.floor(Math.random() * 255);

                return (
                  <li className="random-list" style={{ backgroundColor: `rgb(${rend},${rend1},${rend2})` }} key={index}>{`rgb(${rend},${rend1},${rend2})`}</li>
                )
              })
            }
          </ul>
        </div>

        <button className="random-button" onClick={this.handleRandom}>Random</button>

      </div>
    )
  }
}
