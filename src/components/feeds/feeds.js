import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';

import classes from '../../style/scss/components/feeds.scss';
import Posts from './posts';

class Feeds extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Row>
          <Col xs={24} md={{span:22, offset: 1}} lg={{span: 12, offset: 2}}>
            <Posts className={classes.Post}/>
          </Col>
          <Col xs={0} lg={6} push={1}>
            <Card title='Create a new post' bordered={false} className={classes.Card}>New Post</Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Feeds