import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from '../../../../style/scss/components/navigationItem.scss';

const navigationItem = (props) => {
  return (
  <li>
    <NavLink to={props.link}
             exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
  )
};

export default navigationItem;