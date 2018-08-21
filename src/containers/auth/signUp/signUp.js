import {connect} from 'react-redux';

import SignUpForm from '../../../components/auth/signUpForm';
import * as actions from '../../../store/action';

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password, history) => dispatch(actions.signUp(email, password, history))
  }
};

const mapStateToProps = state => {
  return {
    error: state.auth.error
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)