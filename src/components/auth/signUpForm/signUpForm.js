import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Select, Row, Col, Button, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class SignUpForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  submitHandler = (e) => {
    e.preventDefault();

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
        xs: {span: 24},
        sm: {span: 8}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16}
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form onSubmit={this.submitHandler}>
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
              minLength: 6, message: 'Your password must contain at least 6 characters'
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
          label='Gender'>
          {getFieldDecorator('gender', {})(
            <Select defaultValue='male'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
              <Option value='other'>Other</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='Birthday'>
          {getFieldDecorator('birthday', {})(
            <DatePicker placeholder='Choose your birthday'></DatePicker>
          )}

        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type='primary'  htmlType='submit'>Register</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create()(SignUpForm)

export default WrappedRegistrationForm;