import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/ltk.png';
import UserIcon from '../../assets/images/icon/user.png';
import ChatIcon from '../../assets/images/icon/chat.png';
import FriendsIcon from '../../assets/images/icon/friends.png';
import MenuIcon from '../../assets/images/icon/menu-btn.png';
import CancelIcon from '../../assets/images/icon/cancel.png';
import SettingIcon from '../../assets/images/icon/settings.png';

const FixSidebarLeft = () => {
  return (
    <div id='FixSidebarLeft' className='fixed-sidebar'>
      <div className='fixed-sidebar-left sidebar--small'>
        <a href='' className='logo'>
          <div className='img-logo'>
            <img src={Logo} alt='' />
          </div>
        </a>
        <div className='mcustomScrollBar ps'>
          <ul className='bar-left-menu'>
            <li className='menu-item'>
              <a href='#'>
                <img src={MenuIcon} alt='' />
              </a>
            </li>
            <li className='menu-item'>
              <a href='#'>
                <img src={ChatIcon} alt='' />
              </a>
            </li>
            <li className='menu-item'>
              <a href='#'>
                <img src={UserIcon} alt='' />
              </a>
            </li>
            <li className='menu-item'>
              <a href='#'>
                <img src={FriendsIcon} alt='' />
              </a>
            </li>
            <li className='menu-item'>
              <a href='#'>
                <img src={MenuIcon} alt='' />
              </a>
            </li>
            <li className='menu-item'>
              <a href='#'>
                <img src={SettingIcon} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='fixed-sidebar-left sidebar--large'>
        {/* <a href='' className='logo'>
          <div className='img-logo'>
            <img src={Logo} alt='' />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default FixSidebarLeft;
