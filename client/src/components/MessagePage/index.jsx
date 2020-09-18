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
          <Grid
            container
            direction='row'
            // spacing={3}
            // alignItems='center'
            justify='center'>
            <Grid item xl={3} md={3} sm={4}>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
                        <p className='user-name'>Trong Khoa</p>
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
            </Grid>
            <Grid item xl={6} md={6} sm='auto'></Grid>
            <Grid item xl={3} md={3} sm={3}>
              <div className='user-info-wrapper'>
                <div className='title'>
                  <h2 className='h2'>User Info</h2>
                  <span>
                    <HighlightOffIcon />
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
