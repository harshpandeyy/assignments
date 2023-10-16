import React, { Component } from 'react'
import './CrudApp.css'


export default class CrudApp extends Component {
  state: {
    arrayData:any;
    data:string;

  }
  constructor(props:any){
    super(props);
    this.state={
      arrayData:[],
      data:''
    }
  }

  deleteData=(index:any)=>{
    const{arrayData,data}=this.state;
    arrayData.splice(index,1);
    this.setState({arrayData})
  }

  pushData=()=>{
    const { arrayData, data } = this.state;

        if (data) {
          this.setState({
            arrayData: [...arrayData, data],
            data: '',
          });
        }
  }

  updateData=(e:any)=>{
    this.setState({data:e.target.value})
  }

  render() {
    
    return (
      <div className="crud-container">
        <div className="heading">
          <p>CrudApp</p>
        </div>
        <div className="crudTextBoxContainer">
        <div className="crudTextBox">
            {
              this.state.arrayData.map((item: any, index: any) => {
                return (
                  <li>{item}</li>
                )
              })
            }
          </div>
          <div className="crud-buttons">
            <button className="deleteButton" onClick={this.deleteData}>Delete</button>
            <button className="updateButton" onClick={this.updateData}>Update</button>
          </div>

        </div>
        <div className="crudBody">
          <input className="crudInput" type="text" placeholder='Enter text here' value={this.state.data} onChange={this.updateData} />
          <button className="crudButton" onClick={this.pushData}>Add</button>
        </div>  
      </div>
    )
  }
}

