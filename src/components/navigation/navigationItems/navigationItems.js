import React from 'react';

import classes from '../../../style/scss/components/navigationItems.scss';
import Search from '../../search';
import NavigationItem from './navigationItem';
import Logo from '../../logo';

const navigationItems = (props) => {

  return (
    <div className={classes.NavigationItems}>
      <Logo/>
      <div className={classes.Search}>
          <Search/>
      </div>
      <ul className={classes.NavRight}>
        <NavigationItem link='/forum' exact>Discussion</NavigationItem>
        <NavigationItem link='/charts'>Charts</NavigationItem>
        <NavigationItem link='/signIn' exact>Login</NavigationItem>
        <NavigationItem link='/signUp'>Register</NavigationItem>
      </ul>
    </div>

  )
};

export default navigationItems;