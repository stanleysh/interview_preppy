import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './QuestionForm.css';
import questionService from '../../utils/questionService';

class QuestionForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        question: '',
        tips: '',
        script: '',
        timer: null,
        user: this.props.user._id,
        completed: false,
        id: ''
    }
}

    // async componentDidMount() {
    //     this.setState({
    //         id: this.props.location.state.id,
    //         question: this.props.location.state.question,
    //         tips: this.props.location.statetips,
    //         script: this.props.location.statescript,
    //         timer: this.props.location.statetimer,
    //         user: this.props.location.stateuser
    //     });
    //     console.log(this.state.id)
    // }


    handleChange = (e) => {
        // this.setState({updateMessage: ''});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleNewSubmit = async (e) => {
        e.preventDefault();
        try {
            await questionService.newQuestion(this.state, '/api/questions/new');
            this.props.history.push('/questions');
        } catch (err) {
            console.log(err.message);
        };
    };

    handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await questionService.updateQuestion(this.state, `/api/questions/${this.state.id}`)
        } catch (err) {
            console.log(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.question);
    }

    render() {
            return(
                <div>
                    <div className="form-group">
                        {console.log(this.props)}
                        <h1>{this.props.location}</h1>
                        <form className="questionForm" onSubmit={this.handleNewSubmit}>
                        <div className="formLayout">
                                <h1>Enter a new question: </h1>
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
                                    <br/>
                                    <h2>Please enter time in seconds</h2>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <button className="btn btn-default Large-btn btn-info" disabled={this.isFormInvalid()}>Create</button>&nbsp;&nbsp;
                                    <Link to='/questions'>
                                        <button className="btn btn-default Large-btn btn-info">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
    };
};

export default QuestionForm;