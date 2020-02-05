import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function QuestionModal(props) {

    return(
        <>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={props.handleClose}>
                Finished!
             </Button>
            </Modal.Footer>
        </>
    );
}

export default QuestionModal;