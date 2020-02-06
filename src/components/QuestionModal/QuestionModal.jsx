import React, {useState} from 'react';
import './QuestionModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function QuestionModal(props) {
    const [open, setOpen] = useState(false);

    return(
        <div className='practiceModal'>
            <Modal.Header closeButton>
                <Modal.Title><h1>Question: {props.questionNum}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p id='question'>
                    {props.question}
                </p>
                <Button 
                    onClick={() => setOpen(!open)}
                    aria-controls="tip"
                    aria-expanded={open}
                    className="tip-btn"
                    variant="outline-info"
                >Show Tip</Button>
                <Collapse in={open}>
                    <div className="tip">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa massa, efficitur at est ut, iaculis hendrerit ante. Pellentesque convallis varius interdum. Praesent nunc dui, dignissim at nisi sit amet, porta blandit nunc. Nunc molestie ligula odio. Aenean sem nisl, accumsan gravida bibendum id, lobortis vitae lorem. Mauris vitae neque dapibus, elementum neque eu, ullamcorper lectus. Fusce laoreet mattis malesuada.
                    </div>
                </Collapse>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="info" onClick={props.handleClose} style={{fontSize: '20px'}}>
                Finished!
             </Button>
            </Modal.Footer>
        </div>
    );
}

export default QuestionModal;