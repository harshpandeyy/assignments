import React, { Component } from 'react'
import { QuizData } from './RedData';
import './RedElement.css'

export default class RedElement extends Component {
  state: {
    quizFullData: any;
    quizSingleShowData: any;
    counter: number;
    selectedOption: boolean;
    quizSingleData: any;
    checkBox: boolean;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      quizFullData: QuizData,
      selectedOption: false,
      quizSingleShowData: [],
      quizSingleData: QuizData[0],
      counter: 0,
      checkBox: false
    };
  }


  handleOption = (singleDataIndex: any) => {
     let shallowArray=[]
    shallowArray = { ...this.state.quizSingleData }
     shallowArray.selected=singleDataIndex
    this.setState({ quizSingleData:shallowArray }) 
      return (
       <div></div>
      )
  }
  
  render() {
    return (
      <div className="quiz-options">
          {
            this.state.quizFullData[this.state.counter].options.map((singleData: any, singleDataIndex: any) => {
              return (
                <div
                  className={singleDataIndex === this.state.quizSingleData.selected ? 'red-active-option-box' :'red-option-box' }
                  onClick={()=>this.handleOption(singleDataIndex)}
                >
                  {singleData.answer} 
                </div>
              );
            
            })}
        </div>
    )
  }
}
