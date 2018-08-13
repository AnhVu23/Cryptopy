import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import classes from '../../../style/scss/components/sideDrawer.scss';
import Aux from '../../../hocs/react-aux'
import SideDrawerToggle from './sideDrawerToggle';
import Search from '../../UI/search';
class SideDrawer extends Component {
  state = {
    collapsed: true
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const menuClass = this.state.collapsed ? classes.Hide : null;
    return (
      <div className={classes.Nav}>
        <div>
          <SideDrawerToggle clicked={this.toggleCollapsed}
                            collapsed={this.state.collapsed}/>
          <Menu mode='inline'
                theme='light'
                className={[classes.SideDrawer, menuClass].join(' ')}>
            <Menu.Item key='1'>
              <Icon type='line-chart'/>
              <span>Charts</span>
              <Link to='/charts'/>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='team'/>
              <span>Discussion</span>
              <Link to='/forum'/>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='login'/>
              <span>Login</span>
              <Link to='/login'/>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type='user-add'/>
              <span>Register</span>
              <Link to='/signUp'/>
            </Menu.Item>
          </Menu>
        </div>
        <Search/>
      </div>
    )
  }
}

export default SideDrawer;