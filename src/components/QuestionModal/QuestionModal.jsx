import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './QuestionModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function QuestionModal(props) {
    const [openTip, showOpenTip] = useState(false);
    const [openScript, showOpenScript] = useState(false);
    const [tip, setTip] = useState('Show Tip');
    const [script, setScript] = useState('Show Script');
    const [questionTimer, setQuestionTimer] = useState(props.timer);
    const [timing, setTiming] = useState(false);

    useEffect(() => {
        if(timing) {
        let timer1= setTimeout(() => {
            setQuestionTimer(questionTimer - 1);
          }, 1000);
        if(questionTimer === 0) {
            setTiming(false);
        }
          return () => {
              clearTimeout(timer1);
          }
        };
    }, [timing, questionTimer]);

    let formatTime = (time) => {
        let mins = Math.floor(time / 60).toString().padStart(2, '0');
        let secs = (time % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    let timerStartStop = () => {
        setTiming(!timing);
    }
    
    let restartTimer = () => {
        setTiming(false);
        setQuestionTimer(props.timer);
    };

    let missingElement = (element) => {
        return element === ''
    }

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
        <>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Question: {props.questionNum}</h1>

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="question-title">
                    {props.question}
                </p>
                <p className="question-description">
                    {props.description}
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
                        {missingElement(props.tip) ?  "Nothing here!" : props.tip}
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
                        {missingElement(props.script) ?  "Nothing here!" : props.script}
                    </div>
                </Collapse>
            </Modal.Body>
            <Modal.Footer className="custom-footer">
                <div className='timer'> 
                    <p className='timer-counter'>&nbsp;Timer: {formatTime(questionTimer)}</p>
                    <button
                        onClick = {timerStartStop}
                        className={timing ? "timer-btn btn btn-danger" : "timer-btn btn btn-info"}>
                            {timing ? "Stop" : "Start"}
                    </button>
                        <button
                        onClick = {restartTimer}
                        className="timer-btn btn btn-warning" >
                            Reset
                    </button>
                </div>
                <div className = 'ftr-btns'>
                    <Link to={`/questions/form/${props.id}`} >
                        <Button className='ftr-btn' variant='info' onClick={props.handleClose} style={{fontSize: '20px'}}>Edit</Button>
                    </Link>
                    <Button variant="info" onClick={props.handleClose} style={{fontSize: '20px'}}>
                    Finished!
                    </Button>
                </div>
            </Modal.Footer>
        </>
    );
}

export default QuestionModal;