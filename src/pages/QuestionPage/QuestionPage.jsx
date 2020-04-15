import React, {Component} from 'react';
import questionService from '../../utils/questionService';
import './QuestionPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import NewQuestion from '../../components/NewQuestion/NewQuestion';


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
        </div>
        )}
}


export default QuestionPage;