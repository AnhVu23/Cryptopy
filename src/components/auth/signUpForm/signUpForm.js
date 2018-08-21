import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Select, Button, DatePicker} from 'antd';

import classes from '../../../style/scss/components/signInForm.scss';

const FormItem = Form.Item;
const Option = Select.Option;

class SignUpForm extends Component {
  state = {
    confirmDirty: false
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {email, password} = values;
        this.props.signUp(email, password);
      }
    });
  };

  confirmBlurHandler = (e) => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    })
  };

  compareToFirstPassword = (rule, value, callback) => {
    const {form} = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('The password you enter is not consistent')
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const {form} = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };

  render() {
    const {getFieldDecorator} = this.props.form;

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
          offset: 10
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
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout}
                    label='Password'>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password',
              }, {
                validator: this.validateToNextPassword
              }, {
                min: 6, message: 'Your password must contain at least 6 characters'
              }]
            })(
              <Input type='password'/>
            )}
          </FormItem>
          <FormItem {...formItemLayout}
                    label='Confirm Password'>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password'
              }, {
                validator: this.compareToFirstPassword
              }]
            })(<Input type='password' onBlur={this.confirmBlurHandler} />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>Nickname&nbsp;
                <Tooltip>
                  <Icon type='question-circle-o'/>
                </Tooltip>
              </span>)}>
            {getFieldDecorator('nickname', {
              rules: [{
                required: true, message: 'Please input your nickname!'
              }]
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label='Birthday'>
            {getFieldDecorator('birthday', {
              rules: [{required: true, message: 'You must choose your birthday'
              }]})(
              <DatePicker placeholder='Choose your birthday' style={{width: '100%'}}/>
            )}

          </FormItem>
          <FormItem
            {...formItemLayout}
            label='Gender'>
            {getFieldDecorator('gender', {initialValue: 'male'})(
              <Select>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='other'>Other</Option>
              </Select>
            )}
            {errorMessage}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type='primary'  htmlType='submit'>Register</Button>
          </FormItem>
        </Form>
      </div>

    )
  }
}

const WrappedRegistrationForm = Form.create()(SignUpForm);

export default WrappedRegistrationForm;