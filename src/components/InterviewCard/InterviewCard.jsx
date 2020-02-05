import React from 'react';
import './InterviewCard.css';
import Card from 'react-bootstrap/Card';

const questionDict = {1: 'Tell me about yourself?', 2: 'Why do you want to work here?', 3: 'Question 3', 4: 'Question 4', 5: 'Question 5', 6: 'Question 6', 7: 'Question 7', 8: 'Question 8', 9: 'Question 9', 10: 'Question 10'}


const InterviewCard = (props) => (
    <div className='InterviewCard'>
        <div className='first'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <h1>Question:</h1>
                    <h2>
                        {questionDict[props.questionNum]}
                    </h2>
                </Card.Body>
            </Card>
        </div>
    </div>
    
);

export default InterviewCard;