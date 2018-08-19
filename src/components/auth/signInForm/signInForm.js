import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class SignInForm extends Component {
  submitHandler(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {email, password} = values;
        this.props.signIn(email, password);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
              required: true, message: 'Please input your password'
            }]
          })(
            <Input type='password'/>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type='primary'  htmlType='submit'>Login</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedSignInForm = Form.create()(SignInForm);
export default WrappedSignInForm;