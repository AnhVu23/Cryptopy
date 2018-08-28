import React from 'react';
import {Card, Button} from 'antd';
const addingPostCard = (props) => {
  return (
      <Card title='Create a new post'>
        <Button type='primary'
                onClick={props.clicked}>CREATE POST</Button>
      </Card>
  )
};

export default addingPostCard;