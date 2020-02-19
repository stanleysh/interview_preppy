import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewBoard from '../../components/InterviewBoard/InterviewBoard';
import WelcomePage from '../welcome/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: null,
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='Logo'>
            <Link to="/" className="logo-holder"><img src="https://cdn.auth0.com/blog/react-js/react.png" alt="fart" width="75px"/></Link>
          </div>
          <div className='banner'>
            <p>Interview Prepper (name change pending)</p>
          </div>
        </header>
        <Switch>
          <Route exact path = '/' render={() =>
          <WelcomePage/>
        }/>
          <Route exact path = '/demo' render={() =>
           <InterviewBoard />
        }/>
        <Route exact path = '/signup' render={({history}) =>
          <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
        
        }/>
        <Route exact path = '/login' render={({history}) =>
          <LoginPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
      }/>
        </Switch>
      </div>
    );
    }
}

export default App;
