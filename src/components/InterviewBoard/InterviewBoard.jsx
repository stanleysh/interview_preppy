import React from 'react';
import './InterviewBoard.css';
import InterviewCard from '../InterviewCard/InterviewCard';

const numQuestions = [1,2,3,4,5,6,7,8,9,10]

const InterviewBoard = (props) => (
    <div className = 'InterviewBoard'>
        <div className = 'title-card'>
            <h1>Top 10 Asked Questions</h1>
        </div>
        <div className = 'InterviewBoard-grid'>
            {numQuestions.map((num, idx) =>
                <InterviewCard 
                questionNum = {num}
                />
            )}
        </div>
    </div>
    
);

export default InterviewBoard;