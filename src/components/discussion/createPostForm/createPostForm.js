import React, {Component} from 'react';
import {Input, Button, Form} from 'antd';
import WysiwigEdtior from './wysiwyg';

const FormItem = Form.Item;
class CreatePostForm extends Component {

  onSubmitHandler(e) {
    e.preventDefault();
  }

  onCancelHandler() {

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        span: 22
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 4
      }
    };
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler.bind(this)}>
          <FormItem {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: 'Please add the title'
              }]
            })(
              <Input placeholder='Title'/>
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            <WysiwigEdtior/>
          </FormItem>
          <FormItem {...formItemLayout}>
            {getFieldDecorator('content', {
              required: true, message: 'Please type something'
            })(
              <Input placeholder='Content'/>
              )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type='danger' htmlType='button' onClick={this.onCancelHandler}>Cancel</Button>
            <Button type='primary' htmlType='submit'>Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedCreatePost = Form.create()(CreatePostForm);
export default WrappedCreatePost