import React, {useState} from 'react';
import './NewQuestion.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewUpdateModal from '../../components/NewUpdateModal/NewUpdateModal';

function NewQuestion(props) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='InterviewCard'>
            <Card style={{ width: '300px', height: '200px'}}>
                <Card.Body>
                    <h1 className='newQuestion'>New Question</h1>
                    <img src='https://picaflor-azul.com/images/plus-circle1.png' className="newQuestionLogo" alt="Add question logo"/>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-info" className="addBtn" onClick={handleShow}>Add New Question</Button>
                </Card.Footer>
            </Card>
        </div>
        <Modal 
        size="lg"
        show={show} 
        onHide={handleClose} 
        style={{opacity:1}} 
        centered
        dialogClassName="qModal"
        >
        <NewUpdateModal
            questionNum = {props.questionNum}
            question = {props.question}
            tip = {props.tip}
            script = {props.script}
            timer = {props.timer}
            handleClose={handleClose}/>
        </Modal>
    </> 
    );
};

export default NewQuestion;