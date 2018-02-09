/**
* Collect
* @type (Component) Presentational
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import Button from '../';
import Icon from '../../Icon';
import { ICONS } from '../../Icon/constants';

const Wrapper = styled(Button)`
  padding: 0 16px;
  min-width: 48px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class Collect extends React.Component {
  render() {
    const isChecked = this.props['aria-checked'];
    const themed = this.props['data-themed'];

    return (
      <Wrapper
        className={`c-btn--collect${isChecked ? ' is-collected' : ''}`}
        {...this.props}
      >
        {
          isChecked && (
            <Icon
              icon={ICONS.COLLECT}
              fill={themed ? '#ffffff' : '#000000'}
              stroke={themed ? '#ffffff' : '#000000'}
              viewBox="0 0 14 18"
            />
          )
        }
        {
          !isChecked && (
            <Icon
              icon={ICONS.COLLECT}
              fill="none"
              stroke={themed ? '#D3D4D8' : '#555'}
              viewBox="0 0 14 18"
            />
          )
        }
      </Wrapper>
    );
  }
}

Collect.propTypes = {
  'aria-checked': PropTypes.bool.isRequired,
  'data-themed': PropTypes.bool.isRequired,
};

export default Collect;
