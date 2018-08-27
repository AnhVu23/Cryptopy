import React, {Component} from 'react';
import { List} from 'antd';

import classes from '../../../../style/scss/components/posts.scss'
import Post from './post/post';
import Aux from '../../../../hocs/react-aux/react-aux'
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
        <Aux>
          <List className={classes.Posts}>
            {listData.map(post => {
              return <Post title={post.title} likes='10' comments='20' href={post.href} username={post.description}/>
            })}
          </List>
        </Aux>

      )
    }
}

export default Posts;