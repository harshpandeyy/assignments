import React, { Component } from 'react'
import './Validations.css'



export default class Validation extends Component {
  state: {
    email: any,
    password: any,
    isMail: boolean,
    isPassword: boolean,
    mailWarning:string,
    passWarning:string
  }
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      isMail: false,
      isPassword: false,
      password: '',
      mailWarning:'',
      passWarning:''
    };
  }

  handleValidation = () => {
        
  }

  emailCheck = (e:any) => {
    this.setState({email:e.target.value,mailWarning:''})
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!emailRegex.test(e.target.value)) {
      this.setState({mailWarning:'Wrong email'})
    }
  }

  passCheck=(e:any)=>{
    this.setState({ password:e.target.value,passWarning: '' })
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(e.target.value)) {
      this.setState({ passWarning: 'Wrong password' })
    }
  }
  
  
  render() {

    return (
      <div className="val-card-container">
        <div className="card-small-container">
          <div className="val-sign-text">Sign in to your account</div>
          <div className="val-text">Email</div>

          <input
            className="val-email-input"
            type="email"
            value={this.state.email}
            placeholder='Email'
            onChange={(e) => this.emailCheck(e)}
            required
          />
          <p className="mail-warning">{this.state.mailWarning}</p>

          <div className="val-pass-text">Password</div>
          <input
            className="val-pass-input"
            value={this.state.password}
            type="password"
            placeholder='Password'
            required
            onChange={(e) => this.passCheck(e)}
          />
           <p className="pass-warning">{this.state.passWarning}</p>

          <button className="val-submit" onClick={this.handleValidation}>Submit</button>
        </div>
      </div>
    )
  }
}

