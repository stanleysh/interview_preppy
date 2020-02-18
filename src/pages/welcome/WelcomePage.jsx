import React from 'react';
import './WelcomePage.css'
import { MDBAnimation } from "mdbreact";

const WelcomePage = (props) => {

    return (
        <div>
            <MDBAnimation type="fadeIn" className='welcomeLogo'>
                <h1 className='welcome'>Welcome</h1>
            </MDBAnimation>
            <div className="About">
                <h1>About</h1>
                <h4>This tool was created to help people get more familiar with interview prep questions, as well as give tips and tricks to help answer certain questions.</h4>
            </div>
        </div>
    )
}

export default WelcomePage