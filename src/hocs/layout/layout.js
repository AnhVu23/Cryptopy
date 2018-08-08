import React, {Component} from 'react';

import Aux from '../react-aux';
import NavigationItems from '../../components/navigation/navigationItems';
class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavigationItems/>
      </Aux>
    )
  }
}

export default Layout;