import React from 'react';

import NavigationItems from '../navigationItems';
import SideDrawerToggle from '../sideDrawer/sideDrawerToggle';
import Search from '../../search';
import classes from '../../../style/scss/components/toolbar.scss';
import Logo from '../../logo';
const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.MobileNav}>
        <Logo/>
        <Search/>
        <SideDrawerToggle clicked={props.drawerToggleClicked}
                          collapsed={props.collapsed}/>
      </div>
      <nav className={classes.Nav}>
        <NavigationItems isAuthenticated={props.isAuthenticated}/>
      </nav>
    </div>
  )
};

export default toolbar;