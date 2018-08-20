import React from 'react';
import { List, Icon} from 'antd';


const post = (props) => {
  const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
      {text}
  </span>
  );
  return (
    <List.Item key={props.title} actions={[<IconText type='like-o' text={props.likes}/>, <IconText type='message' text={props.comments}/>]}>
      <List.Item.Meta  title={<a href={props.href}>{props.title}</a>}
                       description={props.username}/>
    </List.Item>
  )
};

export default post;