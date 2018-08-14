import React from 'react';

import NavigationItems from '../navigationItems';
import SideDrawerToggle from '../sideDrawer/sideDrawerToggle';
import Search from '../../search';
import classes from '../../../style/scss/components/toolbar.scss';
import Logo from '../../logo';
const toolbar = (props) => {
  const mobileNav = (
    <div className={classes.MobileNav}>
      <Logo/>
      <Search/>
      <SideDrawerToggle clicked={props.drawerToggleClicked}
                        collapsed={props.collapsed}/>
    </div>
  );
  return (
    <header className={classes.Toolbar}>
      {mobileNav}
      <nav className={classes.Nav}>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default toolbar;