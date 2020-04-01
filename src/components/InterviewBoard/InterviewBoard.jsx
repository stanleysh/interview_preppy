import React from 'react';
import './InterviewBoard.css';
import InterviewCard from '../InterviewCard/InterviewCard';

const numQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const InterviewBoard = (props) => (
    <div className = 'InterviewBoard'>
        <h1>Top 20 Asked Questions</h1>
        <div className = 'InterviewBoard-grid'>
            {numQuestions.map((num, index) =>
                <InterviewCard 
                questionNum = {index + 1}
                />
            )}
        </div>
    </div>
    
);

export default InterviewBoard;