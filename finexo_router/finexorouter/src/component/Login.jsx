import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can implement login logic here
    console.log('Login attempt:', this.state);
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="app-title">CryptoWallet</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="register-link">
            Don’t have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
