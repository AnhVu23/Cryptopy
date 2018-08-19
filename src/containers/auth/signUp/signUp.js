import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUpForm from '../../../components/auth/signUpForm';
import * as actions from '../../../store/action';
class SignUp extends Component {

}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(actions.signUp(email, password))
  }
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)