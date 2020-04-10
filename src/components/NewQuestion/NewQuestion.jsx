import React from 'react';
import { Link } from 'react-router-dom';
import './NewQuestion.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewQuestion(props) {
    return (
        <>
        <div className='InterviewCard'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <h1 className='newQuestion'>New Question</h1>
                    <img src='https://picaflor-azul.com/images/plus-circle1.png' className="newQuestionLogo" alt="Add question logo"/>
                </Card.Body>
                <Card.Footer>
                    <Link to='/questions/form'>
                        <Button variant="outline-info" className="addBtn">Add New Question</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    </> 
    );
};

export default NewQuestion;