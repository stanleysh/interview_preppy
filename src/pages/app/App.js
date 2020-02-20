import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewBoard from '../../components/InterviewBoard/InterviewBoard';
import WelcomePage from '../welcome/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: null,
      user: userService.getUser()
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
        <header>
          <NavBar 
          handleLogout = {this.handleLogout}
          user = {this.state.user}
          />
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
