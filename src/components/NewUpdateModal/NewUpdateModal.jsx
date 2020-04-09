import React, { Component } from 'react';
import './NewUpdateModal.css';
import questionService from '../../utils/questionService';
import Modal from 'react-bootstrap/Modal';

class NewUpdateModal extends Component {
    state = {
        question: '',
        tips: '',
        script: '',
        timer: null,
        completed: false,
        updateMessage: '',
        newQuestion: true
    }


    handleChange = (e) => {
        this.setState({updateMessage: ''});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleNewSubmit = async (e) => {
        e.preventDefault();
        try {
            await questionService.newQuestion(this.state);
        } catch (err) {
            this.setState({updateMessage: err.message});
        };
    };

    isFormInvalid() {
        return !(this.state.question);
    }

    render() {
        if(this.state.newQuestion){
            return(
                <div>
                    <Modal.Header closeButton>
                        <Modal.Title><h1>Add a new question: </h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-group">
                            <form className="questionForm" onSubmit={this.handleNewSubmit}>
                            <div className="formModal">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control Large-field" placeholder="Question" value={this.state.question} name="question" onChange={this.handleChange} />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea className= "form-control customArea" placeholder="Tips" value={this.state.tips} name="tips" onChange={this.handleChange} rows='5' cols='100'/>
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea className= "form-control customArea" placeholder="Script" value={this.state.script} name="script" onChange={this.handleChange} rows='5' cols='100'/>
                                    </div>
                                    <div className="col-sm-12">
                                        <input type="number" className="form-control Large-field" value={this.state.timer} name="timer" onChange={this.handleChange} />
                                        <h2>Please enter time in seconds</h2>
                                    </div>
                                    <div className="col-sm-12 text-center">
                                        <button className="btn btn-default Large-btn btn-info" disabled={this.isFormInvalid()}>Create</button>&nbsp;&nbsp;
                                        <button className="btn btn-default Large-btn btn-info" onClick={this.props.handleClose}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </div>
            )
        } else {

        };
    };
};

export default NewUpdateModal;