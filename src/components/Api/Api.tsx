import React, { Component } from 'react'
import './Api.css'

export default class Api extends Component {
  state: {
    Data: any;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      Data: []
    }
  }

  handleApi = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
    const target = await data.json()
    this.setState({ Data: target })
    console.log(this.state.Data)
  }

  render() {
    return (
      <div className="api-container">
        <button className="api-button" onClick={this.handleApi}>Show Data</button>
        <div >
          {
            this.state.Data.map((item: any, index: any) => {
              return (
                  <div className="data-container" key={index}>{item.title}</div>              
              )
            })
          }
        </div>

      </div>
    )
  }
}