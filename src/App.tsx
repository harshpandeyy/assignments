import React, { Component } from "react";
import Dropdown from "./components/DropDown/Dropdown";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInput from "./components/UserInput/UserInput";
import Home from "./components/Home";
import UserInputNum from "./components/UserInputNum/UserInputNum";
import UserAppend from "./components/UserAppend/UserAppend";
import Validation from "./components/Validation/Validation";
import QuizList from "./components/QuizList/QuizList";
import RandomColor from "./components/RandomColor/RandomColor";
import RedElement from "./components/RedElement/RedElement";
import CrudApp from "./components/CrudApp/CrudApp";
import Api from "./components/Api/Api";
import ParkApp from "./components/ParkApp/ParkApp";
import Parking from "./components/ParkApp/Parking";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userinput" element={<UserInput />} />
          <Route path="/UserInputNum" element={<UserInputNum />} />
          <Route path="/UserAppend" element={<UserAppend />} />
          <Route path="/Validation" element={<Validation />} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/QuizList" element={<QuizList />} />
          <Route path="/RandomColor" element={<RandomColor />} />
          <Route path="/RedElement" element={<RedElement />} />
          <Route path="/CrudApp" element={<CrudApp />} />
          <Route path="/Api" element={<Api/>} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/parkapp" element={<ParkApp />} />
          <Route path="/parking" element={<Parking />} />
        </Routes>
      </Router>
    );
  }
}
