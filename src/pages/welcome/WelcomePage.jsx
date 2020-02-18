import React from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css'
import Button from 'react-bootstrap/Button';


const WelcomePage = () => {

    return (
        <div>
            <h1 className='welcomeLogo fade-in'>Welcome</h1>
            <div className="navBar">
                <Link to='/demo'><Button variant="outline-info navButton fade-in">Demo</Button></Link>
                <Button variant="outline-info navButton fade-in">Sign-up</Button>
                <Button variant="outline-info navButton fade-in">Login</Button>
            </div>
            <div className="About">
                <h1>About</h1>
                <h4>This tool was created to help people get more familiar with interview prep questions, as well as give tips and tricks to help answer certain questions.</h4>
            </div>
        </div>
    )
}

export default WelcomePage