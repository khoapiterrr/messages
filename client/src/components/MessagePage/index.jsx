import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Container, Grid, Box, Button, Avatar } from '@material-ui/core';
import Header from '../Header';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { getOffset } from '../../utils/common';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UserGreenIMG from '../../assets/images/icon/user-green.png';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';
import { Col } from 'reactstrap';
import VideoCallIMG from '../../assets/images/icon/video-camera-32.png';
import InformationIMG from '../../assets/images/icon/information-32.png';
import CallIMG from '../../assets/images/icon/phone-ringing-32px.png';
import AttachFileIcon from '@material-ui/icons/AttachFile';
export const MessagePage = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const ofTop = getOffset(document.getElementById('listChat')).top;
    setStyle({ ...style, height: `calc(100vh - ${ofTop}px)` });
  }, []);
  return (
    <div className='page'>
      <Header />
      <div className='message-home-page'>
        <Container fixed={false} maxWidth={false}>
          <div className='row'>
            <Col sm={5} md={4} xl={3}>
              <div className='conversion-wrapper'>
                <div className='title'>
                  <h2 className='h2'>Conversion</h2>
                </div>
                <div className='conversation'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text' id='basic-addon1'>
                        <SearchIcon />
                      </span>
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search here'
                      aria-label='Username'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      Recent Chats
                      <ExpandMoreIcon />
                    </div>
                    <div className='col-md-6 text-right'>
                      New Chat
                      <ExpandMoreIcon />
                    </div>
                  </div>
                  <div
                    className='list-chat scroll-chat'
                    id='listChat'
                    style={style}>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                    <div className='list-chat-item'>
                      <Avatar
                        alt='Trong khoa'
                        src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                        className='avatar'
                      />
                      <div className='info-chat-item'>
                        <p className='h5 user-name'>Trong Khoa</p>
                        <p className='last-chat'>
                          Nice-try bro hihi. &nbsp; <span>●6.50 pm</span>
                        </p>
                      </div>
                      <div className='seen'>
                        <span>5</span>
                      </div>
                      <div className='more-icon'>
                        <MoreHorizIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <div className='col'>
              <div className='content-inbox'>
                <div className='mes-card content-inbox__header '>
                  <Avatar
                    alt='Trong khoa'
                    src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                    className='avatar'
                  />
                  <div className='info'>
                    <p className='h4'>KhoaPiterrr</p>
                    <p className='status'>Online</p>
                  </div>
                  <div className='inbox-action'>
                    <img src={VideoCallIMG} className='mx-3' alt='' />
                    <img src={CallIMG} alt='' className='mx-3' />
                    <img src={InformationIMG} className='mx-3' alt='' />
                  </div>
                </div>
              </div>
            </div>
            <Col sm={5} md={3}>
              <div className='user-info-wrapper mb-3'>
                <div className='title'>
                  <h2 className='h2'>User Info</h2>
                  <span>
                    <HighlightOffIcon />
                  </span>
                </div>
                <div className='mes-card user-intro mb-3'>
                  <div className='user-intro__content'>
                    <Avatar
                      alt='Trong khoa'
                      src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/30709828_2032828676992328_6094577782937878528_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=A-9YBVNn1gAAX8K3md1&_nc_ht=scontent.fhan3-3.fna&oh=79b14e3b4ea1d8bda4561951ae855561&oe=5F89370E'
                      className='avatar'
                    />
                    <p className='h4 username mt-3 font-weight-bold'>
                      Trong Khoa
                    </p>
                    <p className='status'>last seen today at 23:06 pm</p>
                  </div>
                </div>
                <div className='mes-card contact-info mb-3'>
                  <div className='contact-info__header'>
                    <img src={UserGreenIMG} alt='' />
                    <span className='h5'>Contact Information</span>
                    <div className='more'>
                      <MoreHorizIcon />
                    </div>
                  </div>
                  <div className='contact-info__body'>
                    <p className='info-item'>
                      <MailOutlineIcon className='icon' />{' '}
                      <span>ltk.gym@gmail.com</span>
                    </p>
                    <p className='info-item'>
                      <CallIcon className='icon' /> <span>+84 393 837 623</span>
                    </p>
                    <p className='info-item'>
                      <LanguageIcon className='icon' />{' '}
                      <span>www.google.com</span>
                    </p>
                  </div>
                </div>
                <div className='mes-card add-tag mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span>Add Tag</span>
                </div>
                <div className='mes-card group-common mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span>Group in common (3)</span>
                </div>
                <div className='mes-card share-file mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span>Share</span> Files
                </div>
                <div className='mes-card block-user mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span>Block User</span>
                </div>
                <div className='mes-card report-user mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span>Report User</span>
                </div>
                <div className='mes-card delete-chat mb-3'>
                  <LocalOfferIcon className='user-info__icon' />{' '}
                  <span> Delete Chat</span>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};
