import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewBoard from './components/InterviewBoard/InterviewBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: null,
    }
  }

  handleCardSelection = (idx) => {
    // open modal or something
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Interviewer Prepper</h1>
        </header>
        <div className="About">
          <h2>About</h2>
          <h4>This tool was created to help people get more familiar with interview prep questions, as well as give tips and tricks to help answer certain questions.</h4>
        </div>
        <div>
          <InterviewBoard />
        </div>
      </div>
    );
    }
}

export default App;
