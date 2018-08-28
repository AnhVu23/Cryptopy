import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {withRouter} from 'react-router-dom';

import AddingPostCard from './addingPost/addingPostCard/addingPostCard';
import AddingPostToggle from './addingPost/addingPostToggle/addingPostToggle';
import classes from '../../../style/scss/components/feeds.scss';
import Posts from './posts/posts';

class Feeds extends Component {
  createPostClickHandler() {
    const {history} = this.props;
    history.push('/discussion/createPost');
  }
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.InnerContainer}>
          <Row>
            <Col xs={24} md={{span:22, offset: 1}} lg={{span: 12, offset: 2}}>
              <Posts/>
              <AddingPostToggle clicked={this.createPostClickHandler}/>
            </Col>
            <Col xs={0} lg={6} push={1}>
              <AddingPostCard clicked={this.createPostClickHandler}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default withRouter(Feeds)