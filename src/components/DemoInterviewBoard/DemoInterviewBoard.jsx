import React from 'react';
import './DemoInterviewBoard.css';
import InterviewCard from '../InterviewCard/InterviewCard';
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
        </div>
    </div>
);

export default DemoInterviewBoard;