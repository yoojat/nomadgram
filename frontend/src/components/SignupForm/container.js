import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    email: '',
    name: '',
    username: '',
    password: '',
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
  };
  render() {
    const {username, password, email, name} = this.state;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleFacebookLogin={this._handleFacebookLogin}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const {target: {value, name}} = event;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = event => {
    const {email, name, password, username} = this.state;
    const {createAccount} = this.props;
    event.preventDefault();
    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    const {facebookLogin} = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
