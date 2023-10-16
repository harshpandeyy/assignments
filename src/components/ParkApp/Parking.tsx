import React, { Component } from 'react'
import './ParkApp.css'
import { Data } from './Data'
import { park } from './config'

export default class Parking extends Component {
  state:{
    data:any,
    vehicleNum:string
  }
  constructor(props:any){
    super(props);
    this.state={
      data:Data,
      vehicleNum:''
    }
  }

  handleIdentity = () => {
    const availableNumbers = [1, 2, 3, 4, 5, 6];
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const choosenNumber=availableNumbers[randomIndex]
    availableNumbers.splice(randomIndex,1)
    // let identity = Math.floor(Math.random() * 6 + 1)
    const updatedData = this.state.data.map((item:any) => {
      if (choosenNumber === item.id && item.available) {
        return { ...item, available: false,text:this.state.vehicleNum };
       
      }
      return item;
    });
    this.setState({ data: updatedData });
  }   

  handleTakeaway=(id:any)=>{
    const updatedData = this.state.data.map((item: any) => {
      if (id === item.id) {
        return { ...item, available: true, text: 'Available' };

      }
      return item;
    });
    console.log('takeaway')
    this.setState({ data: updatedData });
  }
        
  render() {
    return (
      <div className="parking-container"> 
        <div className='video-container'>
          <video autoPlay muted loop id="video">
            <source src={park} type="video/mp4" />
          </video>
        </div> 
        <div className="show-video">
          <div className="park-top-container">
            <input
              className="parking-input"
              value={this.state.vehicleNum}
              onChange={(e) => this.setState({ vehicleNum: e.target.value })}
              placeholder='Enter Vehicle Number'
            />
            <button className="parking-button" onClick={this.handleIdentity}>Park</button>
          </div>

          <div className="park-cards-container">
            {
              this.state.data.map((item: any, index: any) => {
                return (
                  <div className="park-card-container" key={item.id}>
                    <div className="park-card">
                      <div className={item.available === true ? "card-header" : "card-header-active"}>
                      </div>
                      <div className="card-content">
                        <button className="park-available-button">{item.text}</button>
                        <button
                          className="park-takeaway-button"
                          key={item.id}
                          onClick={() => this.handleTakeaway(item.id)}
                        >Take away</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>   
        </div> 
        
         
          
      </div>
     
    )
  }
}
