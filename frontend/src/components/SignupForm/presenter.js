import React from 'react';
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';
import FacebookLogin from 'react-facebook-login';

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {context.t('Sign up to see photos and videos from your friends.')}
    </h3>
    {/* <button className={formStyles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      {context.t('Log in with Facebook')}
    </button> */}
    <FacebookLogin
      appId="1966508960282555"
      autoLoad={true}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.facebookSingupLogin}
      icon="fa fa-facebook-official"
      textButton={context.t('Login in with Facebook')}
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form}>
      <input
        type="email"
        placeholder={context.t('Email')}
        className={formStyles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={context.t('Full Name')}
        className={formStyles.textInput}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        type="username"
        placeholder={context.t('Username')}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={context.t('Password')}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value={context.t('Sign up')}
        className={formStyles.button}
        onChange={props.handleInputChange}
      />
    </form>
    <p className={formStyles.terms}>
      {context.t('By signing up, you agree to our ')}
      <span>{context.t('Terms & Privacy Policy')}</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired,
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SignupForm;
