import React, {Component} from 'react';
import {Input, Button, Form, Row, Col} from 'antd';

import WysiwigEdtior from './wysiwyg';
import classes from '../../../style/scss/components/createPost.scss';
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
        offset: 2,
        span: 20
      }
    };
    return (
      <div className={classes.Container}>
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
            {getFieldDecorator('content', {
              required: true, message: 'Please type something'
            })(
              <WysiwigEdtior/>
              )}
          </FormItem>
          <FormItem>
            <Row>
              <Col span={17}/>
              <Col span={2}>
                <Button type='danger'
                        htmlType='button'
                        onClick={this.onCancelHandler}
                        style={{width: '100%'}}>Cancel</Button>
              </Col>
              <Col span={1}/>
              <Col span={2}>
                <Button type='primary'
                        style={{width: '100%'}}
                        htmlType='submit'
                        >Submit</Button>
              </Col>
            </Row>

          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedCreatePost = Form.create()(CreatePostForm);
export default WrappedCreatePost