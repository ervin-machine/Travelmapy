import React, {useState} from 'react'
import "./Signin.css"
function Signin() {
  const [isSigninOpen, setisSigninOpen] = useState(false);
    const modalStyle = {
        modal: {
          display: 'block',
        },
        off: {
          display: 'none',
        }
}   
  const SigninOpen = () => {
    setisSigninOpen(true);
  }
  const SigninClose = () => {
    setisSigninOpen(false);
  }
    return (
        <>
        <div className="signin-content" style={isSigninOpen===true ? modalStyle.on : modalStyle.off}>
            <h2 className="signin-head">Sign in</h2>
            <p className="signin-text">Sign in with Email</p>
            <div className="input">
            <input className="signin-input" placeholder="Email" type="text" required/>
            <input className="signin-input" placeholder="Password" type="password" required/>
            <div className="signin-buttons">
              <button className="signin-back" onClick={SigninClose}>BACK</button>
              <button className="signin-confirm" onClick={SigninClose}>Sign In</button>
            </div>
            </div>
            
            
        </div>

        <div className="signin-button">
          <button className="gn-signin-email" onClick={SigninOpen} style={isSigninOpen===true ? modalStyle.off : modalStyle.on}>Sign in with Email</button>
        </div>
        </>
        
    )
}

export default Signin
