import {connect} from 'react-redux';

import SignInForm from '../../../components/auth/signInForm';
import * as actions from '../../../store/action';

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password, history) => dispatch(actions.signIn(email, password, history))
  }
};

const mapStateToProps = state => {
  return {
      error: state.auth.error
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)