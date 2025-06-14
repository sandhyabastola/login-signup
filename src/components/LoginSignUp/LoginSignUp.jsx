import React, { useState } from 'react';
import './LoginSignUp.css';
import person from '../Assests/person.jpg';
import email from '../Assests/email.jpg';
import password from '../Assests/password.jpg';

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className='Container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null :
                    <div className="input">
                        <img src={person} alt="Person" />
                        <input type="text" placeholder='Name' />
                    </div>
                }
                <div className="input">
                    <img src={email} alt="Email" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={password} alt="Password" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forget-password">Lost Password? <span>Click Here</span></div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignUp;
