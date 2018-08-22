import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';

import classes from '../../style/scss/components/feeds.scss';
import Posts from './posts';

class Feeds extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Row>
          {/*<Col xs={0} md={1} lg={2}></Col>*/}
          <Col xs={24} md={{span:22, offset: 1}} lg={{span: 12, offset: 2}}>
            <Posts/>
          </Col>
          <Col xs={0} lg={6} push={2}>
            <Card title='Create a new post' bordered={false}>New Post</Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Feeds