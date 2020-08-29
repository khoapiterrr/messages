import React from 'react';
import PropTypes from 'prop-types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Logo from '../../../../assets/images/ltk.png';
import { Link } from 'react-router-dom';
const SignTabs = ({ children, tabCurrent, onClickTabsSignIn, formTitle }) => {
  const onClickTabs = (tab) => {
    if (tab !== tabCurrent) {
      onClickTabsSignIn(tab);
    }
  };
  return (
    <React.Fragment>
      <div className='register-login-forn'>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a
              className={tabCurrent === true ? 'nav-link active' : 'nav-link'}
              onClick={() => onClickTabs(true)}
              href='javascript:void(0)'>
              <PowerSettingsNewIcon color='disabled' />
              <div className='ripple-container' />
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={tabCurrent === false ? 'nav-link active' : 'nav-link'}
              onClick={() => onClickTabs(false)}
              href='javascript:void(0)'>
              <LockOpenIcon color='disabled' />
              <div className='ripple-container' />
            </a>
          </li>
        </ul>
        <div className='content'>
          <div className='title'>
            <img src={Logo} alt='' /> {formTitle}
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

SignTabs.propTypes = {
  onClickTabsSignIn: PropTypes.func.isRequired,
  tabCurrent: PropTypes.bool,
  formTitle: PropTypes.string,
};

SignTabs.defaultProps = {
  onClickTabsSignIn: null,
  tabCurrent: true,
  formTitle: 'Login to your Account',
};

export default SignTabs;
