import React from 'react';
import './DemoPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import NewQuestion from '../../components/NewQuestion/NewQuestion';
const defaultQuestions = require('../../Data/questionData');

const DemoInterviewBoard = (props) => (
    <div className = 'InterviewBoard'>
        <h1>Top 20 Asked Questions</h1>
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
            <NewQuestion/>
        </div>
    </div>
);

export default DemoInterviewBoard;