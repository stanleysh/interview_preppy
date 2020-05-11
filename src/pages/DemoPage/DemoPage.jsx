import React from 'react';
import './DemoPage.css';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import InterviewList from '../../components/InterviewList/InterviewList';
import MediaQuery from 'react-responsive';
const defaultQuestions = require('../../Data/questionData');

const DemoInterviewBoard = (props) => (
    <div className = 'InterviewBoard'>
        <h1>Top 20 Asked Questions</h1>
        <h4>Please note that the following features are not available in demo: </h4>
        <h4>
            - Creating/editing questions
            <br/>
            - Question timers
            <br/>
            - Adding/editing tips/script
        </h4>
        <MediaQuery maxDeviceWidth={767}>
        <ul className="list-group">
        {defaultQuestions.map((interviewQuestion, index) =>
                <InterviewList
                interviewQuestion = {interviewQuestion}
                questionNum = {index + 1}
                demo = {true}
                />
            )}
        </ul>
        </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
        <div className = 'InterviewBoard-grid'>
            {defaultQuestions.map((interviewQuestion, index) =>
                <InterviewCard 
                interviewQuestion = {interviewQuestion}
                questionNum = {index + 1}
                demo = {true}
                />
            )}
        </div>
        </MediaQuery>
    </div>
);

export default DemoInterviewBoard;