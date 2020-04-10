import React, { Component } from 'react';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import './NewUpdatePage.css';

class NewUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <QuestionForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default NewUpdatePage;