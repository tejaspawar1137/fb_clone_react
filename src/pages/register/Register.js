import React from 'react'
import './register.css'
const Register = () => {
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
                                  <input placeholder="Username" className="loginInput" />  
                                  <input placeholder="Email" className="loginInput" />  
                                  <input placeholder="Password" className="loginInput" />  
                                  <input placeholder="ConfirmPassword" className="loginInput" />  
                                  <button className="loginButton">Sign Up</button>
                                  <span className="loginForgot">Forgot PassWord</span>
                                  <button className="loginRegisterButton">
                                      Log Into Account
                                  </button>
                           </div>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default Register
