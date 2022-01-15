import React from 'react'
import './login.css'
const Login = () => {
    return (
        <>
          <div className="login">
              <div className="loginWrapper">
                  <div className="loginLeft">
                       <h3 className="loginLogo">Facebook</h3>
                       <span className="loginDesc">
                           Connect With Friends And the World Around You on Facebook.
                       </span>
                  </div>
                  <div className="loginRight">
                           <div className="loginBox">
                                  <input placeholder="Email" className="loginInput" />  
                                  <input placeholder="Password" className="loginInput" />  
                                  <button className="loginButton">Log In</button>
                                  <span className="loginForgot">Forgot PassWord</span>
                                  <button className="loginRegisterButton">
                                      Create A New Account
                                  </button>
                           </div>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default Login
