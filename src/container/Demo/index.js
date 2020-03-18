import React, {Component} from 'react'

class Demo extends Component {
  state = {
    data : {
      userName:'',
      password:'',
      mobileNumber:'',
      gender:'',
      login: true
    }
  }

  onChangeHandler = (event) => {
    let data = JSON.parse(JSON.stringify(this.state.data))
    data[event.target.name] = event.target.value
    this.setState({
      data
    })
  }


  getMobileNumber = (e) => {
    let data = JSON.parse(JSON.stringify(this.state.data)) 
      const regex = /^[0-9\b]+$/;
      if (e.target.value === '' || regex.test(e.target.value)){
        data.mobileNumber = e.target.value 
      {
         this.setState({ data })
      }
    }
  }

 
 
  saveData = (e) => {
    e.preventDefault()
    console.log(this.state.data)
  }

  onLogin = () => {
    this.setState({
      login:false
    })
  }

  onRegister = () => {
    this.setState({
      login:true
    })
  }


  render() {
   
   
    return (
      <div className="hero">
        <div className="form-box">
            <div className="button-box">
              <butoon type="button" onClick= {this.onLogin}   className={this.state.login ? "toggle-btn " : 'toggle-btn btn'}>Log In</butoon>
              <butoon type="button" onClick={this.onRegister} className={!this.state.login ? "toggle-btn" : "toggle-btn btn"}>Register</butoon>
            </div>
            <div className="social-icon">
              <span className="zoom"><i class="fa fa-facebook "></i></span>
              <span className="zoom"><i class="fa fa-twitter"></i></span>
              <span className="zoom"><i class="fa fa-instagram "></i></span>
            </div>

            <form className={ this.state.login ? "input-group login-form" : 'input-group'}>
              <input type="email" className="input-field" placeholder="Enter Email" autoFocus/>
              <input type ="pasword" className="input-field" placeholder=" Enter Password "/>
              <input type ="checkbox" className="check-box"/><span>Remember Password</span>
              <button type ="submit" className="login-btn" value="Submit">Login In</button>
            </form>

            <form className={ this.state.login ? "input-group " : "input-group register-form"}>
            <input type="text" className="input-field" placeholder="Enter Username Here" autoFocus/>
              <input type="email" className="input-field" placeholder="Enter Email "/>
              <input type ="pasword" className="input-field" placeholder=" Enter Password "/>
              <input type ="checkbox" className="check-box"/><span>I aggre the term & conditions</span>
              <button type ="submit" className="login-btn" value="Submit">Register</button>
            </form>

        </div>
      </div>
    )
  }
}
export default Demo


 {/* <h1> form </h1>
      <form onSubmit = {this.saveData}>
        <input type = "text" name="userName" value ={this.state.data.userName} required onChange={this.onChangeHandler} placeholder="Enter username"/>  <br></br>
        <input type="radio"  name="gender"  onChange={this.onChangeHandler} value="Male" />Male  <br></br>
        <input type="radio"  name="gender" onChange = {this.onChangeHandler}  value="Female"/> Female <br></br>
        <input type = "password" name ="password"  value ={this.state.data.password} minLength="8" required  onChange={this.onChangeHandler} placeholder=" Enter password"/><br></br>
        <input type = "text" name="mobileNumber"  value ={this.state.data.mobileNumber} maxLength ="10" required onChange={this.getMobileNumber} placeholder=" Enter mobile number"/><br></br>
        <input type = "submit" value="submit"/>
      </form> */}