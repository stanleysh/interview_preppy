import React, { Component } from 'react';
import './InterviewBoard.css';
import InterviewCard from '../InterviewCard/InterviewCard';

const numQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const InterviewBoard = (props) => (
    <div className = 'InterviewBoard'>
        <div className = 'title-card'>
            <h1>Top 20 Asked Questions</h1>
        </div>
        <div className = 'InterviewBoard-grid'>
            {numQuestions.map(num =>
                <InterviewCard 
                questionNum = {num}
                />
            )}
        </div>
    </div>
    
);

export default InterviewBoard;