import React, {useState} from 'react';
import './QuestionModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function QuestionModal(props) {
    const [open, setOpen] = useState(false);
    const [tip, setTip] = useState('Show Tip')

    let showHide = () => {
        if(open) {
            setTip('Show Tip')
        } else {
            setTip('Hide Tip')
        }
    }

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
                    onClick={() => {setOpen(!open); showHide()}}
                    aria-controls="tip"
                    aria-expanded={open}
                    className="tip-btn"
                    variant="outline-info"
                >{tip}</Button>
                <Collapse in={open}>
                    <div className="tip">
                        {props.tip}
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