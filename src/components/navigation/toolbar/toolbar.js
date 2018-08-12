import React from 'react';
import NavigationItems from '../navigationItems';
import classes from '../../../style/scss/components/toolbar.scss';
const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <nav className={classes.Nav}>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default toolbar;