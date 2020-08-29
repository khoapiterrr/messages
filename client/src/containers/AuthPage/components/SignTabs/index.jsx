import React from 'react';
import PropTypes from 'prop-types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Logo from '../../../../assets/images/ltk.png';
import { Link } from 'react-router-dom';
const SignTabs = ({ children }) => {
  return (
    <React.Fragment>
      <div className='register-login-forn'>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <Link className='nav-link' to='/sign-in'>
              <PowerSettingsNewIcon color='disabled' />
              <div className='ripple-container' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link active' to='/sign-up'>
              <LockOpenIcon color='disabled' />
              <div className='ripple-container' />
            </Link>
          </li>
        </ul>
        <div className='content'>
          <div className='title'>
            <img src={Logo} alt='' /> Login to your Account
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

SignTabs.propTypes = {};

export default SignTabs;
