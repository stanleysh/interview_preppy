import React, { useState } from 'react';
import './InterviewList.css';
import Modal from 'react-bootstrap/Modal';
import QuestionModal from '../QuestionModal/QuestionModal'
import Button from 'react-bootstrap/Button';

function InterviewList(props) {
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
        <li className="list-group-item interview-list list-group-item-action">
            <p>Question: {props.questionNum}</p>
            {questionPreview}
            <Button variant="outline-info" className="practice-btn" onClick={handleShow}>Practice Now</Button>
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
    </li>
    );
}


export default InterviewList;