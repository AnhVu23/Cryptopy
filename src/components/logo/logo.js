import React, {Component} from 'react';

import desktopLogo from '../../assets/img/logo3.png';
import mobileLogo from '../../assets/img/mobileLogo.png';
import classes from '../../style/scss/components/logo.scss';
import {Link} from 'react-router-dom';

class Logo extends Component {

  render() {
    return (
      <Link to='/'>
        <div className={classes.Logo}>
          <picture>
            <source srcSet={desktopLogo} media='(min-width: 576px)'/>
            <source srcSet={mobileLogo}  media='(max-width: 575px)'/>
            <img src={mobileLogo} alt='logo'/>
          </picture>
        </div>
      </Link>
    )
  }
}

export default Logo;