import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InterviewBoard from '../../components/InterviewBoard/InterviewBoard';
import WelcomePage from '../welcome/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.login()});
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
          <WelcomePage
          user = {this.state.user}/>
        }/>
          <Route exact path = '/demo' render={() =>
           <InterviewBoard />
        }/>
        <Route exact path = '/signup' render={({history}) =>
          <SignupPage
          history={history}
          handleSignup={this.handleSignup}
        />
        
        }/>
        <Route exact path = '/login' render={({history}) =>
          <LoginPage
          history={history}
          handleLogin={this.handleLogin}
          />
        }/>
        <Route exact path = '/about' render={() =>
          <AboutPage/>
        }/>
        </Switch>
      </div>
    );
    }
}

export default App;
