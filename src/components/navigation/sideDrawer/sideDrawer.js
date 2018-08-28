import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import classes from '../../../style/scss/components/sideDrawer.scss';
import Aux from '../../../hocs/react-aux'
import Backdrop from '../../UI/backdrop';
const sideDrawer = (props) => {
    const signInNav = (
      <Menu.Item key='signIn'>
        <Icon type='login'/>
        <span>Login</span>
        <Link to='/signIn'/>
      </Menu.Item>
    );
    const signUpNav = (
      <Menu.Item key='signUp'>
        <Icon type='user-add'/>
        <span>Register</span>
        <Link to='/signUp'/>
      </Menu.Item>
    );
    const signOutNav = (
      <Menu.Item key='signOut'>
        <Icon type='logout'/>
        <span>Log Out</span>
        <Link to='/signOut'/>
      </Menu.Item>
    );
    const menuClass = props.open ? null : classes.Hide;
    return (
      <Aux>
        <Backdrop show={props.open}
                  clicked={props.closed}/>
        <nav className={classes.SideDrawer}>
          <Menu mode='inline'
                theme='light'
                className={[classes.SideDrawer, menuClass].join(' ')}
                onClick={props.closed}>
            <Menu.Item key='charts' >
              <Icon type='line-chart'/>
              <span>Charts</span>
              <Link to='/charts'/>
            </Menu.Item>
            <Menu.Item key='discussion'>
              <Icon type='team'/>
              <span>Discussion</span>
              <Link to='/discussion'/>
            </Menu.Item>
            {props.isAuthenticated ? null : signInNav}
            {props.isAuthenticated ? signOutNav : signUpNav}
          </Menu>
        </nav>
      </Aux>
    )
}

export default sideDrawer;