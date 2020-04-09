import React, {useState} from 'react';
import './QuestionModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function QuestionModal(props) {
    const [openTip, showOpenTip] = useState(false);
    const [openScript, showOpenScript] = useState(false);
    const [tip, setTip] = useState('Show Tip');
    const [script, setScript] = useState('Show Script');

    let showHideTip = () => {
        if(openTip) {
            setTip('Show Tip');
        } else {
            setTip('Hide Tip');
        };
    };
    let showHideScript = () => {
        if(openScript) {
            setScript('Show Script')
        } else {
            setScript('Hide Script')
        }
    };

    return(
        <div className='practiceModal'>
            <Modal.Header closeButton>
                <Modal.Title><h1>Question: {props.questionNum}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p id='question'>
                    {props.question}
                </p>
                <Button 
                    onClick = {() => {showOpenTip(!openTip); showHideTip()}}
                    aria-controls="tip"
                    aria-expanded={openTip}
                    className="tip-btn"
                    variant="outline-info"
                >{tip}</Button>
                <Collapse in={openTip}>
                    <div className="tip">
                        {props.tip}
                    </div>
                </Collapse>
                <Button
                    onClick = {() => {showOpenScript(!openScript); showHideScript()}}
                    aria-controls="script"
                    aria-expanded={openScript}
                    className={openTip ? "show-tip-script-btn" : "hidden-tip-script-btn" }
                    variant="outline-info"
                >{script}</Button>
                <Collapse in={openScript}>
                    <div className={openTip ? 'show-tip-script' : 'hidden-tip-script'}>
                        {props.script}
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