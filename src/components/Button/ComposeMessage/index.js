/**
* ComposeMessageButton
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
  color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
  font-size: 14px;
  font-weight: 400;
  height: 48px;
  letter-spacing: 0.01rem;
  margin: 0;
  padding: 0;
  width: 48px;

  .icon, svg {
    height: 20px;
    width: 24px;
  }
`;

// eslint-disable-line react/prefer-stateless-function
class ComposeMessageButton extends React.Component {
  onClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <Wrapper
        className={'c-btn--compose-message'}
        aria-label={this.props['aria-label']}
        onClick={this.onClick}
      >
        <Icon icon={ICONS.NEW_MESSAGE_V2} viewBox="0 0 22 18" />
      </Wrapper>
    );
  }
}

ComposeMessageButton.defaultProps = {
  'aria-label': 'Compose a message',
};

ComposeMessageButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ComposeMessageButton;
