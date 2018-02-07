/**
*
* Edit
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Components
import Button from '../';
import Icon from '../../Icon';
import { ICONS } from '../../Icon/constants';

const Wrapper = styled(Button)`
  border: thin solid ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
  border-radius: 24px;
  color: ${(props) => props.theme.isDark ? '#000000' : '#ffffff'};
  font-size: 12px;
  font-weight: 500;
  height: 28px;
  letter-spacing: 0.01rem;
  margin: 0 8px;
  padding: 0 12px;
`;

class Settings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <Wrapper
        className={'c-bttn__edit'}
        aria-label={this.props['aria-label']}
        onClick={this.onClick}
      >
        <Icon icon={ICONS.SETTINGS} />
        {this.props.content}
      </Wrapper>
    );
  }
}

Settings.propTypes = {
  'aria-label': PropTypes.string,
  content: PropTypes.any,
  onClick: PropTypes.func,
};

export default Settings;
