import React, { useState } from 'react';
import './InterviewCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuestionModal from '../QuestionModal/QuestionModal'

function InterviewCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let questionPreview;
    if (props.question.length > 30) {
        questionPreview = <h3>{props.question.slice(0,30)}...</h3>
    } else {
        questionPreview = <h3>{props.question}</h3>
    }

    return (
        <>
        <div className='InterviewCard'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <h1>Question: {props.questionNum}</h1>
                    {questionPreview}
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-info" className="practice" onClick={handleShow}>Practice Now</Button>
                </Card.Footer>
            </Card>
        </div>
        <Modal 
        show={show} 
        onHide={handleClose} 
        style={{opacity:1}} 
        centered
        dialogClassName="qModal"
        >
        <QuestionModal 
            questionNum = {props.questionNum}
            question = {props.question}
            tip = {props.tip}
            script = {props.script}
            timer = {props.timer}
            handleClose={handleClose}/>
        </Modal>
        
    </>
    );
}


export default InterviewCard;