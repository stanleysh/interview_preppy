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
    if (props.interviewQuestion.question.length > 30) {
        questionPreview = <p>{props.interviewQuestion.question.slice(0,30)}...</p>
    } else {
        questionPreview = <p>{props.interviewQuestion.question}</p>
    }

    return (
        <>
        <div className='InterviewCard'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <h1 className='question-title'>Question: {props.questionNum}</h1>
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
        size="lg"
        >
        <QuestionModal 
            id = {props.interviewQuestion._id}
            questionNum = {props.questionNum}
            question = {props.interviewQuestion.question}
            description = {props.interviewQuestion.description}
            tips = {props.interviewQuestion.tips}
            script = {props.interviewQuestion.script}
            timer = {props.interviewQuestion.timer}
            handleClose={handleClose}
            demo = {props.demo}
            />
        </Modal>
    </>
    );
}


export default InterviewCard;