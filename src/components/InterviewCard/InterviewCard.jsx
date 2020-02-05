import React, { useState } from 'react';
import './InterviewCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function InterviewCards() {
    const [show, setShow] = useState(false);

    const questionDict = {1: 'Tell me about yourself?', 2: 'Why do you want to work here?', 3: 'Question 3', 4: 'Question 4', 5: 'Question 5', 6: 'Question 6', 7: 'Question 7', 8: 'Question 8', 9: 'Question 9', 10: 'Question 10', 11: 'Question 11', 12: 'Question 12', 13: 'Question 13', 14: 'Question 14', 15: 'Question 15', 16: 'Question 16', 17: 'Question 17', 18: 'Question 18', 19: 'Question 19', 20: 'Question 20'}


}

const questionDict = {1: 'Tell me about yourself?', 2: 'Why do you want to work here?', 3: 'Question 3', 4: 'Question 4', 5: 'Question 5', 6: 'Question 6', 7: 'Question 7', 8: 'Question 8', 9: 'Question 9', 10: 'Question 10'}


const InterviewCard = (props) => (
    <div className='InterviewCard'>
        <div className={(props.questionNum) + 'card'}>
            <Card style={{ width: '300px', height: '175px'}}>
                <Card.Body>
<Card.Text><h1>Question: {props.questionNum}</h1>
                    <h3>{questionDict[props.questionNum]}</h3>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-info" className="practice">Practice Now</Button>
                </Card.Footer>
            </Card>
        </div>
    </div>
    
);

export default InterviewCard;