import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';

import classes from '../../../style/scss/components/signInForm.scss';

const FormItem = Form.Item;

class SignInForm extends Component {
  submitHandler(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {email, password} = values;
        const {history} = this.props;
        this.props.signIn(email, password, history);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 22},
        sm: {span: 8}
      },
      wrapperCol: {
        xs: {
          span: 22},
        sm: {span: 8}
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 22
        },
        sm: {
          span: 8,
          offset: 8
        }
      }
    };
    let errorMessage = null;
    if(this.props.error) {
      errorMessage = (
        <p style={{color: '#f5222d'}}>{this.props.error.message}</p>
      )
    }
    return (
      <div className={classes.Container}>
        <Form onSubmit={this.submitHandler.bind(this)}>
          <FormItem {...formItemLayout}
                    label='Email'>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not a valid Email!'
              }, {
                required: true, message: 'Please input your Email!'
              }]
            })(
              <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25'}}/>}
                     placeholder='Email'/>
            )}
          </FormItem>
          <FormItem {...formItemLayout}
                    label='Password'>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password'
              }]
            })(
              <Input type='password'
                     prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder='Password'/>
            )}
            {errorMessage}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a style={{float: 'right'}} href=''>Forgot password</a>
            <Button type='primary'  htmlType='submit' style={{width: '100%'}}>Login</Button>
            Or <Link to='/signUp'>Register Now!</Link>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedSignInForm = Form.create()(SignInForm);
export default WrappedSignInForm;