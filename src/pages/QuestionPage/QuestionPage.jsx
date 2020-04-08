import React from 'react';
import './QuestionPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
const defaultQuestions = require('../../Data/questionData');


const QuestionPage = (props) => (
<div className = 'InterviewBoard'>
        <h1>Your questions</h1>
        <div className = 'InterviewBoard-grid'>
            {defaultQuestions.map((query, index) =>
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
    
);

export default QuestionPage;