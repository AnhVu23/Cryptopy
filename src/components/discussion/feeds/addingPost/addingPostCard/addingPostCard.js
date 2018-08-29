import React from 'react';
import {Card, Button} from 'antd';

import classes from '../../../../../style/scss/components/addingPostCard.scss';
const addingPostCard = (props) => {
  return (
      <Card title='Create a new post' className={classes.AddingPostCard}>
        <Button type='primary'
                onClick={props.clicked}>CREATE POST</Button>
      </Card>
  )
};

export default addingPostCard;