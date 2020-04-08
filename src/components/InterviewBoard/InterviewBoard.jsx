import React from 'react';
import './InterviewBoard.css';
import InterviewCard from '../InterviewCard/InterviewCard';
const defaultQuestions = require('../../Data/questionData');


const InterviewBoard = (props) => (
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

export default InterviewBoard;