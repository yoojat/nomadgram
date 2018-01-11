import {connect} from 'react-redux';
import Container from './container';

const mapStateProps = (state, ownProp) => {
  const {user} = state;
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

export default connect(mapStateProps)(Container);
