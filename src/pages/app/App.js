import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from '../welcome/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import QuestionPage from '../QuestionPage/QuestionPage';
import DemoInterviewBoard from '../DemoPage/DemoPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    // window.location.reload()
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  componentDidUpdate() {
    window.location.reload()
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
          user = {this.state.user}
          handleLogout = {this.handleLogout}
          />
        }/>
          <Route exact path = '/demo' render={() =>
           <DemoInterviewBoard />
        }/>
        <Route exact path = '/questions' render={() =>
          <QuestionPage
          user = {this.state.user}
          />
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
        <Route exact path = '/about' render={() =>
          <AboutPage/>
        }/>
        </Switch>
      </div>
    );
    }
}

export default App;
