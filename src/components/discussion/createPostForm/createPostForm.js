import React, {Component} from 'react';
import {Input, Button, Form} from 'antd';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';

const FormItem = Form.Item;

class CreatePostForm extends Component {
  componentDidMount() {
    $.FroalaEditor.
  }
  onSubmitHandler(e) {
    e.preventDefault();
  }

  onCancelHandler() {

  }
  render() {
    const {getFieldDecorator} = this.props.form;
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
        <Form onSubmit={this.onSubmitHandler}>
          <FormItem {...formItemLayout}>
            {...getFieldDecorator('title', {
              rules: [{
                required: true, message: 'Please add the title'
              }]
            })(
              <Input placeholder='Title'/>
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            {...getFieldDecorator('content', {
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

export default createPostForm