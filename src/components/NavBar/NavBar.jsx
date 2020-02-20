import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    let nav = props.user ?
    <div>
        <div className='Logo'>
            <Link to="/" className="logo-holder"><img src="https://cdn.auth0.com/blog/react-js/react.png" alt="fart" width="75px"/></Link>
        </div>
          <div className='banner'>
            <p>Interview Prepper (name change pending)</p>
          </div>
    </div>
    :
    <div>
        <div className='Logo'>
            <Link to="/" className="logo-holder"><img src="https://cdn.auth0.com/blog/react-js/react.png" alt="fart" width="75px"/></Link>
        </div>
          <div className='banner'>
            <p>Interview Prepper (name change pending)</p>
          </div>
    </div>
    return (
        <>
        </>
    )
}