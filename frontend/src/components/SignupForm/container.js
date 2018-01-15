import React, {Component} from 'react';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    email: '',
    fullname: '',
    username: '',
    password: '',
  };
  render() {
    const {username, password, email, fullname} = this.state;
    return (
      <SignupForm
        emailValue={email}
        fullnameValue={fullname}
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
    event.preventDefault();
  };

  _handleFacebookLogin = response => {
    console.log(response);
  };
}

export default Container;
