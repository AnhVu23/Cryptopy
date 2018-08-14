import React from 'react';

import classes from '../../../style/scss/components/navigationItems.scss';
import Search from '../../search';
import NavigationItem from './navigationItem';
import Logo from '../../logo';

const navigationItems = (props) => {

  return (
    <div className={classes.NavigationItems}>
      <Logo/>
      <ul className={classes.NavLeft}>
        <NavigationItem link='/forum' exact className={classes.left}>Discussion</NavigationItem>
        <NavigationItem link='/charts' className={classes.left}>Charts</NavigationItem>
      </ul>
      <div className={classes.Search}>
          <Search/>
      </div>
      <ul className={classes.NavRight}>
        <NavigationItem link='/login' exact>Login</NavigationItem>
        <NavigationItem link='/signUp'>Register</NavigationItem>
      </ul>
    </div>

  )
};

export default navigationItems;