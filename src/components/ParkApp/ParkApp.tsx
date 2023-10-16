import React, { Component } from 'react'
import './ParkApp.css'
import { Link } from 'react-router-dom';

export default class ParkApp extends Component {
  state: {
    emailP: any,
    passwordP: any,
    parkMail: boolean,
    parkPassword: boolean,
    mailWarning: string,
    passWarning: string
  }
  constructor(props: any) {
    super(props);
    this.state = {
      emailP: '',
      parkMail: false,
      parkPassword: false,
      passwordP: '',
      mailWarning: '',
      passWarning: ''
    };
  }

  handleParkValidation = () => {

  }

  emailCheck = (e: any) => {
    this.setState({ emailP: e.target.value, mailWarning: '' })
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!emailRegex.test(e.target.value)) {
      this.setState({ mailWarning: 'Wrong email' })
    }
  }

  passCheck = (e: any) => {
    this.setState({ passwordP: e.target.value, passWarning: '' })
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(e.target.value)) {
      this.setState({ passWarning: 'Wrong password' })
    }
  }
  
  render() {
    return (
      <div className="park-container">
        <div className="park-small-container">
          <div className="park-sign-text">Sign in to your account</div>
          <form className="form-container"onSubmit={this.handleParkValidation}>
          <div className="park-text">Email</div> 
          <input
            className="park-email-input"
            type="email"
            value={this.state.emailP}
            placeholder='Email'
            onChange={(e) => this.emailCheck(e)}
            required
          />
          <p className="mail-warning">{this.state.mailWarning}</p>

          <div className="park-pass-text">Password</div>

          <input
            className="park-pass-input"
            value={this.state.passwordP}
            type="password"
            placeholder='Password'
            required
            onChange={(e) => this.passCheck(e)}
          />
          <p className="pass-warning">{this.state.passWarning}</p>

          <Link className="park-link" to="/Parking">
            <button className="park-submit" type="submit">Submit</button>
          </Link>
          </form>
        </div>
      </div>
    )
  }
}

