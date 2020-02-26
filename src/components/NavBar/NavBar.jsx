import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

function NavBar(props) {
    if (props.user) {
        return (
        <div className="App-header">
            <div className='Logo'>
                <Link to="/" className="logo-holder"><img src="https://cdn.auth0.com/blog/react-js/react.png" alt="logo" width="75px"/></Link>
            </div>
            <div className='banner'>
                <p>Interview Prepper (name change pending)</p>
            </div>
            <div className='right-info name'>
                <p>Welcome {props.user.name}</p>
                <Link to='/'><Button variant="info" className="nav-buttons" onClick={props.handleLogout}>
                    Logout
                </Button></Link>
            </div>
        </div>
        )
    }
    
    return (
    <div className="App-header">
        <div className='Logo'>
            <Link to="/" className="logo-holder"><img src="https://cdn.auth0.com/blog/react-js/react.png" alt="logo" width="75px"/></Link>
        </div>
        <div className='banner'>
            <p>Interview Prepper (name change pending)</p>
        </div>
        <div className='right-info'>
            <Link to='/signup'><Button variant="info" className="nav-buttons">Sign-up</Button></Link>
            <Link to='/login'><Button variant="info" className="nav-buttons">Login</Button></Link>
        </div>
    </div>
    )
};

export default NavBar;