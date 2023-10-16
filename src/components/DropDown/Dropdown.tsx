import React, { Component } from "react";
import { options } from "./DropDownData";
import './DropDown.css'

export default class Dropdown extends Component {
    state: {
        isOpen: boolean;
        selectedOption: any;
    }
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            selectedOption: null,
        }
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    selectOption = (option: any) => {
        this.setState({ selectedOption: option.type })
    }

    render() {
        return (
            <>
                <div className="dropdown-container">
                    <div className="select-button" onClick={this.handleClick}>
                        <span className="btn-text" >{this.state.isOpen ? this.state.selectedOption : 'Select your option'}</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <ul className="select-option">
                    {this.state.isOpen ? options.map((option, index) => (
                        <li className="options" onClick={() => this.selectOption(option)} key={index}>{option.type}</li>
                    )) : ''}
                </ul>
            </>
        );
    }
}
