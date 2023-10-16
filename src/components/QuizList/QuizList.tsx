import React, { Component } from 'react'
import { QuizData } from './QuizData.js'
import './quiz.css'
export default class QuizList extends Component {

  state: {
    quizFullData: any;
    quizSingleShowData: any;
    counter: number;
    selectedOption: boolean;
    quizSingleData: any;
    check: boolean;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      quizFullData: QuizData,
      selectedOption: false,
      quizSingleShowData: [],
      quizSingleData: QuizData[0],
      counter: 0,
      check: false
    };
  }

  // componentDidMount() {
  //   this.setState({ quizSingleShowData: this.state.quizFullData[this.state.counter] })
  // }

  nextButton = () => {
    if (this.state.counter < 4)
      this.setState({ counter: this.state.counter + 1 })
  }

  previousButton = () => {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 })
  }

  onSubmit=()=>{
    if (this.state.quizFullData[this.state.counter].selected === this.state.quizFullData[this.state.counter].correct_answer){
    alert('Correct')
    }
    else
    {
      alert('Stuart Little')
    }
  }

  handleOption = (singleDataIndex: any) => {
    this.state.quizFullData.map((item: any, index: any) => {
      return (
        this.state.quizFullData[this.state.counter].selected = singleDataIndex
      )
    })

  }

  handleCheck = (singleDataIndex: any) => {
    this.state.quizFullData.map((item: any, index: any) => {
      let copyArray = [...this.state.quizFullData];
      copyArray[this.state.counter].selected = singleDataIndex;
      this.setState({ quizFullData: copyArray });
    })
  }

  render() {
    return (
      <div className="quiz-container">
        <div className="quiz-question">
          <p className="question-number">Question {this.state.counter + 1}</p>

          <p className="question">
            {
              this.state.quizFullData[this.state.counter].question
            }
          </p>
        </div>
        <div className="quiz-options">
          {
            this.state.quizFullData[this.state.counter].options.map((singleData: any, singleDataIndex: any) => {
              return (
                // <div
                //   className={singleDataIndex === this.state.quizFullData[this.state.counter].selected ? 'active-option-box' : 'option-box'}
                //   onClick={()=>this.handleOption(singleDataIndex)}               
                // >


                // </div>
                <div>
                  <input onClick={() => this.handleCheck(singleDataIndex)} checked={this.state.quizFullData[this.state.counter].selected === singleDataIndex ? true : false} key={singleDataIndex} className="check-box" type="checkbox" />
                  {singleData.answer}
                </div>
              );
            })}

        </div>

        <div className="buttons-container">
          <button className="previous-button" onClick={this.previousButton}>Previous</button>
          <button className="submit-button" onClick={this.onSubmit}>Submit</button>
          <button className="next-button" onClick={this.nextButton}>Next</button>

        </div>

      </div>
    )
  }
}
