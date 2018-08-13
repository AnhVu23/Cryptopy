import React from 'react';

import classes from '../../../style/scss/components/backdrop.scss'
const backdrop = (props) => {
  return (
    props.show ? <div className={classes.Backdrop}
                      onClick={props.clicked}></div> : null
  )
};

export default backdrop;