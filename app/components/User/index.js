/**
 * User
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import Avatar from '../Avatar';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 6px 0;
  text-decoration: none;

  span {
    display: block;
    font-size: 11px;
    color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
    letter-spacing: 0.01rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.name {
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0.01rem;
      margin-bottom: -2px;
    }

    &.username {
      color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
      font-weight: 400;
    }
  }
`;

const User = ({ avatar, className, name, username }) => { // eslint-disable-line arrow-body-style
  return (
    <Wrapper className={`c-user ${className || ''}`}>
      <Avatar src={avatar} />
      <Info className="c-info">
        <span className="name">{name}</span>
        <span className="username">{`@${username}`}</span>
      </Info>
    </Wrapper>
  );
};

User.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default User;
