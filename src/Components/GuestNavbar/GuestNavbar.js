import React, {useState} from 'react'
import './GuestNavbar.css'
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
function GuestNavbar() {
    const [isNotificaionOpen, setNotificaionOpen] = useState(false);
    const NotificationModalOpen = () => {
        setNotificaionOpen(true);
    }
    const NotificationModalClose = () => {
        setNotificaionOpen(false);
    }
    const modalStyle = {
            modal: {
              display: 'block',
            },
            off: {
              display: 'none',
            }
          
    }
    return (
        <div className="guest-navbar">
            <h2 className="gn-logo">Travelmapz</h2>
            <div className="gn-notification" style={isNotificaionOpen===true ? modalStyle.modal : modalStyle.off}>
                <h1 className="gn-modal-title">Sign in</h1>
                <div className="gn-modal-buttons">
                    <button className="gn-signin-fb">Sign in with Facebook</button>
                    <button className="gn-signin-twitter">Sign in with Twitter</button>
                    <Signup />
                    <p className="or">or</p>
                    <Signin />
                    <button className="gn-signin-back" onClick={NotificationModalClose}>BACK</button>
                </div>
            </div>
            <div className="account-sections">
                <i class="nav-icon far fa-bell" onClick={NotificationModalOpen}></i>
                <i class="nav-icon far fa-user" onClick={NotificationModalOpen}></i>
            </div>
        </div>
    )
}

export default GuestNavbar
