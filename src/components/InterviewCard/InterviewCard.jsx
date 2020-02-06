import React, { useState } from 'react';
import './InterviewCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuestionModal from '../QuestionModal/QuestionModal'

function InterviewCard(props) {
    const [show, setShow] = useState(false);

    const questionDict = {1: 'Tell me about yourself', 2: 'Why do you want to work here?', 3: 'Question 3', 4: 'Question 4', 5: 'Question 5', 6: 'Question 6', 7: 'Question 7', 8: 'Question 8', 9: 'Question 9', 10: 'Question 10', 11: 'Question 11', 12: 'Question 12', 13: 'Question 13', 14: 'Question 14', 15: 'Question 15', 16: 'Question 16', 17: 'Question 17', 18: 'Question 18', 19: 'Question 19', 20: 'Question 20'}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='InterviewCard'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <Card.Text><h1>Question: {props.questionNum}</h1>
                    <h3>{questionDict[props.questionNum]}</h3>
                    
                    </Card.Text>
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
                question = {questionDict[props.questionNum]}
                handleClose={handleClose}/>
        </Modal>
        
    </>
    );
}


export default InterviewCard;