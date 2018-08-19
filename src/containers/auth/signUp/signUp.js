import {connect} from 'react-redux';

import SignUpForm from '../../../components/auth/signUpForm';
import * as actions from '../../../store/action';

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(actions.signUp(email, password))
  }
};

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)