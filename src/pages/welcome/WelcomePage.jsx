import React from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css'
import Button from 'react-bootstrap/Button';


const WelcomePage = (props) => {
    if (props.user) {
        return (
            <div>
                <h1 className='welcomeLogo fade-in'>Welcome</h1>
                <div className="welcome-bar">
                    <Link to='/demo'><Button variant="outline-info welcome-btn fade-in" className='your-questions'>Your Questions</Button></Link>
                    <Link to='/'><Button variant="outline-info welcome-btn fade-in" onClick={props.handleLogout}>Logout</Button></Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className='welcomeLogo fade-in'>Welcome</h1>
            <div className="welcome-bar">
                <Link to='/demo'><Button variant="outline-info welcome-btn fade-in">Demo</Button></Link>
                <Link to='/signup'><Button variant="outline-info welcome-btn fade-in">Sign-up</Button></Link>
                <Link to='/login'><Button variant="outline-info welcome-btn fade-in">Login</Button></Link>
            </div>
        </div>
    )
}

export default WelcomePage