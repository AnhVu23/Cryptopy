import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import classes from '../../../style/scss/components/sideDrawer.scss';
import Aux from '../../../hocs/react-aux'
import Backdrop from '../../UI/backdrop';
class SideDrawer extends Component {

  render() {
    const menuClass = this.props.open ? null : classes.Hide;
    return (
      <Aux>
        <Backdrop show={this.props.open}
                  clicked={this.props.closed}/>
        <nav className={classes.SideDrawer}>
          <Menu mode='inline'
                theme='light'
                className={[classes.SideDrawer, menuClass].join(' ')}>
            <Menu.Item key='1' >
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
        </nav>
      </Aux>
    )
  }
}

export default SideDrawer;