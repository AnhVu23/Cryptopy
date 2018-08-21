import React from 'react';

import classes from '../../../style/scss/components/navigationItems.scss';
import Search from '../../search';
import NavigationItem from './navigationItem';
import Logo from '../../logo';
import Aux from '../../../hocs/react-aux';

const navigationItems = (props) => {
  let authNav = (
    <Aux>
      <NavigationItem link='/signIn' exact>Login</NavigationItem>
      <NavigationItem link='/signUp'>Register</NavigationItem>
    </Aux>
  );
  if (props.isAuthenticated) {
    authNav = <NavigationItem link='/signOut'>Log Out</NavigationItem>
  }
  return (
    <div className={classes.NavigationItems}>
      <Logo/>
      <div className={classes.Search}>
          <Search/>
      </div>
      <ul className={classes.NavRight}>
        <NavigationItem link='/forum' exact>Discussion</NavigationItem>
        <NavigationItem link='/charts'>Charts</NavigationItem>
        {authNav}
      </ul>
    </div>

  )
};

export default navigationItems;