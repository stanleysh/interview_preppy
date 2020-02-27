import React from 'react';
import './AboutPage.css';
import Card from 'react-bootstrap/Card';

const AboutPage = () => {
    
    return (
        <div className="About">
            <h1>About</h1>
            <h4>This tool was created to help people get more familiar with interview prep questions, as well as give tips and tricks to help answer certain questions.</h4>
            <div className="Creators">
                <Card border="info" style={{width: '27rem', justifySelf: 'center'}}>
                    <Card.Img variant='top' src="https://media-exp1.licdn.com/dms/image/C5603AQG9AX5M7FF0pQ/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=tnLUigoDESlC3-6OPXTrcFsC6sOW9ss3IsZz6M11Q5Q" style={{width: '23rem', margin: '5px auto', borderRadius: '15px'}}></Card.Img>
                    <Card.Header>
                        <Card.Title style={{fontSize: '20px'}}>Andie He</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">UI/UX Designer</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text style={{fontSize: '13px'}}><img src='https://image.flaticon.com/icons/svg/281/281769.svg' alt='gmail logo' style={{width:'20px'}}/> andiehe12@gmail.com</Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/andiehe/" style={{fontSize: '13px'}}><img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-768x768.png" alt='linked-in logo' style={{width: '20px'}}/> linkedin</Card.Link>
                        <Card.Link href="https://andiehe.com/" style={{fontSize: '13px'}}><img src="https://andiehe.com/wp-content/uploads/2019/10/cropped-logo-32x32.png" alt='andie logo' style={{width:'20px'}}/>Andiehe.com</Card.Link>
                    </Card.Body>
                </Card>
                <Card border="info" style={{width: '27rem', justifySelf: 'center'}}>
                    <Card.Img variant='top' src="https://media-exp1.licdn.com/dms/image/C4E03AQHqQSjbOiTFiQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=xPbN_L2Dts1fUJI1MYTzaFrhA5ew-npbIoaHlD6y49I" style={{width: '23rem', margin: '5px auto', borderRadius: '15px'}}></Card.Img>
                    <Card.Header>
                        <Card.Title style={{fontSize: '20px'}}>Stanley Sham</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text style={{fontSize: '13px'}}><img src='https://image.flaticon.com/icons/svg/281/281769.svg' alt='gmail logo' style={{width:'20px'}}/> stnl.sham@gmail.com</Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/stanley-sham/" style={{fontSize: '13px'}}><img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-768x768.png" alt='linked-in logo' style={{width: '20px'}}/> linkedin</Card.Link>
                        <Card.Link href="https://github.com/stanleysh/" style={{fontSize: '13px'}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='github logo' style={{width:'20px'}}/>stanleysh.git</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AboutPage;
