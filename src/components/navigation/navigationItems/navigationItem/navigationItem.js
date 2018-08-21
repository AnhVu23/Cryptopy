import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from '../../../../style/scss/components/navigationItem.scss';
const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link}
            exact={props.exact}
               activeClassName={classes.active}><span style={{whiteSpace: 'nowrap'}}>{props.children}</span></NavLink>
    </li>
  )
};

export default navigationItem;