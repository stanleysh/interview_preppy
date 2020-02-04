import React from 'react';
import './InterviewCard.css';
import Card from 'react-bootstrap/Card';

const questionDict = {1: 'Tell me about yourself?', 2: 'Why do you want to work here?', 3: 'Test 3', 4: 'Test 4', 5: 'Test 5', 6: 'Test 6'}


const InterviewCard = (props) => (
    <div className='InterviewCard'>
        <div className='first'>
            <Card style={{ width: '200px', height: '200px'}}>
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