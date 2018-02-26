/**
* FollowButton
* @type {Component} Presentational
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Components
import Button from '../';

const Wrapper = styled(Button)`
  border: thin solid ${(props) => props.theme.isDark ? '#D3D4D8' : '#242424'};
  border-radius: 24px;
  color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#242424'};
  font-size: 12px;
  font-weight: 500;
  height: 28px;
  letter-spacing: 0.01rem;
  margin: 0 8px;
  padding: 0 12px;

  &.is-following {
    background-color: #02b875;
    border: thin solid #02b875;
    color: #fff;
  }

  @media (min-width: 600px) {
    font-size: calc(12px * (16/14));
  }
`;

class Follow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onClick = () => {
    this.props.onClick();
  }

  render() {
    const { isFollowing } = this.props;

    return (
      <Wrapper
        className={`c-bttn__follow${isFollowing ? ' is-following' : ''}`}
        aria-label={this.props['aria-label']}
        onClick={this.onClick}
      >
        { isFollowing ? 'Following' : 'Follow' }
      </Wrapper>
    );
  }
}

Follow.propTypes = {
  'aria-label': PropTypes.string,
  isFollowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Follow;
