import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import Modal from 'react-bootstrap/Modal';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: '',
    show: false,
  };

  handleClose = () => this.setState({show: false});
  showModal = () => this.setState({show: true});


  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleLogin();
      this.props.history.push('/');
    } catch (err) {
      this.showModal();
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control Large-field" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control Large-field" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default Large-btn btn-info">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        <Modal show = {this.state.show} >
          <Modal.body>
            <p>Invalid Credentials</p>
          </Modal.body>
        </Modal>
      </div>
    );
  }
}

export default LoginPage;
