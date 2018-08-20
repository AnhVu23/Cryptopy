import React, {Component} from 'react';

import Posts from '../../components/posts';
import Aux from '../../hocs/react-aux';

class Feeds extends Component {
  render() {
    return (
      <Aux>
        <Posts />
      </Aux>
    )
  }
}

export default Feeds;