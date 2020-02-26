import React from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css'
import Button from 'react-bootstrap/Button';


const WelcomePage = () => {

    return (
        <div>
            <h1 className='welcomeLogo fade-in'>Welcome</h1>
            <div className="welcome-bar">
                <Link to='/demo'><Button variant="outline-info welcome-btn fade-in">Demo</Button></Link>
                <Link to='/signup'><Button variant="outline-info welcome-btn fade-in">Sign-up</Button></Link>
                <Link to='/login'><Button variant="outline-info welcome-btn fade-in">Login</Button></Link>
            </div>
            <div className="About">
                <h1>About</h1>
                <h4>This tool was created to help people get more familiar with interview prep questions, as well as give tips and tricks to help answer certain questions.</h4>
            </div>
        </div>
    )
}

export default WelcomePage