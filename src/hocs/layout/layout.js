import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../react-aux';
import Toolbar from '../../components/navigation/toolbar';
import SideDrawer from '../../components/navigation/sideDrawer';
import classes from '../../style/scss/components/layout.scss';
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
      if(!prevState.showSideDrawer) {
        return {showSideDrawer: !prevState.showSideDrawer }
      }
      else {
        return {showSideDrawer: !prevState.showSideDrawer }
      }
    })
  };

  render() {
    return (
      <Aux>
        <header>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}
                   collapsed={!this.state.showSideDrawer}
                   isAuthenticated={this.props.isAuthenticated}/>
        </header>
        <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                    isAuthenticated={this.props.isAuthenticated}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.response.token !== null
  }
};

export default connect(mapStateToProps)(Layout)