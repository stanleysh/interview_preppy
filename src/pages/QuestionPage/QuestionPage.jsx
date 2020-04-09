import React, {Component} from 'react';
import questionService from '../../utils/questionService';
import './QuestionPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';


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
                {this.state.questions.map((query, index) =>
                    <InterviewCard 
                    question = {query.question}
                    tip = {query.tip}
                    script = {query.script}
                    timer = {query.timer}
                    questionNum = {index + 1}
                    />
                )}
            </div>
        </div>
        )}
}


export default QuestionPage;