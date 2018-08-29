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
        xs: {
          span: 22},
        sm: {offset: 2, span: 20}
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
            <Row gutter={{xs: 8, sm: 16, lg: 24}}>
              <Col lg={18} sm={14} xs={12}/>
              <Col lg={2} sm={4} xs={6}>
                <Button type='danger'
                        htmlType='button'
                        onClick={this.onCancelHandler}
                        style={{width: '100%'}}>Cancel</Button>
              </Col>
              <Col lg={2} sm={4} xs={6}>
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