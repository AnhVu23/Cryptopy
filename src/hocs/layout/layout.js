import React, {Component} from 'react';

import Aux from '../react-aux';
import Toolbar from '../../components/navigation/toolbar';
import SideDrawer from '../../components/navigation/sideDrawer';
import Backdrop from '../../components/UI/backdrop';
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer }
    })
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}
                 collapsed={!this.state.showSideDrawer}/>
        <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
        <main>
        </main>
      </Aux>
    )
  }
}

export default Layout;