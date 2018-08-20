import React, {Component} from 'react';
import { List} from 'antd';

import Post from './post/';

class Posts extends Component {

    render() {
      const listData = [];
      for (let i = 0; i < 23; i++) {
        listData.push({
          href: 'http://ant.design',
          title: `ant design part ${i}`,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
      }
      return (
        <List>
          {listData.map(post => {
            return <Post title={post.title} likes='10' comments='20' href={post.href} username={post.description}/>
          })}
        </List>
      )
    }
}

export default Posts;