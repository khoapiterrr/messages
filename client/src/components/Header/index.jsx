import React from 'react';
import SearchIcon from '../../assets/images/loupe.png';
import FixSidebarLeft from '../FixSidebarLeft';
import './styles.scss';
const Header = () => {
  return (
    <>
      <div className='header' id='site-header'>
        <div class='page-title'>
          <h6>LTK - Messages</h6>
        </div>
        <div className='header-content-action'>
          <form action='' className='search-bar w-search'>
            <div className='form-group with-btn'>
              <div className='input-group flex-nowrap'>
                <input
                  type='text'
                  placeholder='Search here people or pages...'
                  aria-label='Username'
                  aria-describedby='addon-wrapping'
                />
                <div className='btn-search'>
                  <img src={SearchIcon} alt='icon search' />
                </div>
              </div>
            </div>
          </form>
          <a href='#' className='link-find-friend'>
            Find Friends
          </a>

          <div className='header-control-action'></div>
        </div>
      </div>
      <div className='header-spacer'></div>
      <FixSidebarLeft />
    </>
  );
};

export default Header;
