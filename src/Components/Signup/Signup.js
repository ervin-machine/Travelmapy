import React, {useState} from 'react'
import "./Signup.css"
function Signup() {
  const [isSignupOpen, setisSignupOpen] = useState(false);
    const modalStyle = {
        modal: {
          display: 'block',
        },
        off: {
          display: 'none',
        }
}   
  const SignUpOpen = () => {
    setisSignupOpen(true);
  }
  const SignUpClose = () => {
    setisSignupOpen(false);
  }
    return (
        <>
        <div className="signup-content" style={isSignupOpen===true ? modalStyle.on : modalStyle.off}>
            <h2 className="signup-head">Sign up</h2>
            <p className="signup-text">Sign up with Email</p>
            <input className="signup-input" placeholder="First Name" type="text" required />
            <input className="signup-input" placeholder="Last Name" type="text" required />
            <input className="signup-input" placeholder="Nickname" type="text" required />
            <input className="signup-input" placeholder="Email" type="text" required/>
            <input className="signup-input" placeholder="Password" type="password" required/>
            <div className="signup-buttons">
              <button className="signup-back" onClick={SignUpClose}>BACK</button>
              <button className="signup-confirm" onClick={SignUpClose}>Sign Up</button>
            </div>
            
        </div>

        <div className="signup-button">
          <button className="gn-signin-email" onClick={SignUpOpen} style={isSignupOpen===true ? modalStyle.off : modalStyle.on}>Sign up with Email</button>
        </div>
        </>
        
    )
}

export default Signup
