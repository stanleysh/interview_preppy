import React, { Component } from 'react';
import questionService from '../../utils/questionService';
import './QuestionPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import NewQuestion from '../../components/NewQuestion/NewQuestion';
import MediaQuery from 'react-responsive';
import InterviewList from '../../components/InterviewList/InterviewList';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


class QuestionPage extends Component {
    state = {
        questions: [],
    }

    async componentDidMount() {
        const questions = await questionService.getUserQuestions('/api/questions');
        this.setState({questions})
    }

    render () {
        return (
            <div className = 'InterviewBoard'>
                <h1>Your questions</h1>
                <MediaQuery maxDeviceWidth={767}>
                    <ul className="list-group">
                        {this.state.questions.map((interviewQuestion, index) =>
                                <InterviewList
                                interviewQuestion = {interviewQuestion}
                                questionNum = {index + 1}
                                demo = {true}
                                />
                            )}
                        <li className="list-group-item list-group-item-action new-question">New Question:                     
                            <Link to='/questions/form'>
                                <Button variant="outline-info" className="add-btn">Add New Question</Button>
                            </Link>
                        </li>
                    </ul>
                </MediaQuery>
                <MediaQuery minDeviceWidth={768}>
                    <div className = 'InterviewBoard-grid'>
                        {this.state.questions.map((interviewQuestion, index) =>
                            <InterviewCard 
                            interviewQuestion = {interviewQuestion}
                            questionNum = {index + 1}
                            demo = {false}
                            />
                        )}
                        <NewQuestion/>
                    </div>
                </MediaQuery>
            </div>
        )}
}


export default QuestionPage;