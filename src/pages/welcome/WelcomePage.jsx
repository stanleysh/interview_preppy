import React from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css'
import Button from 'react-bootstrap/Button';


const WelcomePage = (props) => {
    if (props.user) {
        return (
            <>
                <div className="welcome-banner">
                    <p>Nice to meet you! Im your personal interview assistant :{")"}</p>
                </div>
                <div className="welcome-bar-logged-in">
                    <h1 className='welcomeLogo fade-in'>Welcome</h1>
                    <Link to='/questions'><Button variant="outline-info welcome-btn-questions fade-in" className='your-questions'>Your Questions</Button></Link>
                    <Link to='/'><Button variant="outline-info welcome-btn-logout fade-in" onClick={props.handleLogout}>Logout</Button></Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="welcome-banner">
                <p>Nice to meet you! Im your personal interview assistant :{")"}</p>
            </div>
            <div className="welcome-message">
                <p>I'm here to provide you with the most relevant interview questions for the industry of your choice, curated answer scripts and tools to help you prep with confidence!</p>
            </div> 
            <div className="welcome-bar">
                <h1 className='welcomeLogo fade-in'>Welcome</h1>
                <Link to='/demo'><Button variant="outline-info welcome-btn fade-in">Demo</Button></Link>
                <Link to='/signup'><Button variant="outline-info welcome-btn fade-in">Sign-up</Button></Link>
                <Link to='/login'><Button variant="outline-info welcome-btn fade-in">Login</Button></Link>
            </div>
        </>
    )
}

export default WelcomePage