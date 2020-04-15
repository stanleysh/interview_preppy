import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './QuestionForm.css';
import questionService from '../../utils/questionService';

class QuestionForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        question: '',
        description: '',
        tips: '',
        script: '',
        timer: null,
        user: this.props.user._id,
        completed: false,
        id: ''
    }
}

    async componentDidMount() {
        try {
            this.setState({id: this.props.match.params.id});
            const existQuestion = await questionService.getOneQuestion(`/api/questions/${this.props.match.params.id}`);
            this.setState({
                question: existQuestion.question,
                tips: existQuestion.tips,
                script: existQuestion.script,
                timer: existQuestion.timer,
                completed: existQuestion.completed
            });
        } catch(err) {
            console.log('No question or couldn\'t find question');
        };
    };


    handleChange = (e) => {
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
            this.props.history.push('/questions');
        } catch (err) {
            console.log(err.message);
        }
    }

    handleDelete = (e) => {
        e.preventDefault();
        if(window.confirm("Are you sure you want to delete this question? All data will be removed")) {
            try {
                questionService.deleteQuestion(`/api/questions/${this.state.id}`);
                alert("Successfully deleted question, bringing you back to main questions page");
                this.props.history.push('/questions');
            } catch (err) {
                console.log(err.message);
            };
        }
    }

    isFormInvalid() {
        return !(this.state.question);
    }



    render() {
        let title;
        let deleteBtn;
        if (!this.state.id) {
            title = <h1>Enter a new Question:</h1>
            deleteBtn = null
        } else {
            title = <h1>Edit question</h1>
            deleteBtn = <button className="btn btn-default Large-btn btn-danger" onClick={this.handleDelete}>Delete</button>
        }
        
        return(
            <div className="question-form">
                <div className="form-group">
                    {console.log(this.props)}
                    <h1>{this.props.location}</h1>
                    <form className="questionForm" onSubmit={this.state.id ?  this.handleEditSubmit : this.handleNewSubmit}>
                    <div className="formLayout">
                            {title}
                            <div className="col-sm-12 question">
                                <input type="text" className="form-control customLarge" placeholder="Question" value={this.state.question} name="question" onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-12">
                                <textarea className= "form-control customArea" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} rows='5' cols='100'/>
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
                                <button className="btn btn-default Large-btn btn-info" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;&nbsp;
                                <Link to='/questions'>Cancel</Link>&nbsp;&nbsp;&nbsp;
                                {deleteBtn}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default QuestionForm;