import React from 'react';

import NavigationItems from '../navigationItems';
import SideDrawer from '../sideDrawer';
import classes from '../../../style/scss/components/toolbar.scss';
const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawer/>
      <nav className={classes.Nav}>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default toolbar;