/**
* Like
* @type {Component} Presentational
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import Button from '../';
import Icon from '../../Icon';
import { ICONS } from '../../Icon/constants';

const Wrapper = styled(Button)`
  min-width: 48px;
  padding: 0 16px;

  span {
    align-items: center;
    color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
    display: flex;
    font-size: 11px;
    justify-content: flex-end;
    margin-right: -12px;
    min-width: 20px;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class Like extends React.Component {
  render() {
    const isChecked = this.props['aria-checked'];
    const count = this.props['data-count'];
    const themed = this.props['data-themed'];

    return (
      <Wrapper
        className={`c-btn--like${isChecked ? ' is-liked' : ''}`}
        {...this.props}
      >
        { count > 0 && <span>{count}</span> }
        {
          isChecked && (
            <Icon
              icon={ICONS.HEART}
              fill={themed ? '#ee4956' : '#C0392B'}
              stroke="none"
              viewBox="0 0 20 18"
            />
          )
        }
        {
          !isChecked && (
            <Icon
              icon={ICONS.HEART_OUTLINE}
              fill="none"
              stroke={themed ? '#ffffff' : '#000000'}
              viewBox="0 0 20 18"
            />
          )
        }
      </Wrapper>
    );
  }
}

Like.propTypes = {
  'aria-checked': PropTypes.bool.isRequired,
  'data-count': PropTypes.number.isRequired,
  'data-themed': PropTypes.bool.isRequired,
};

export default Like;
