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

const Wrapper = styled(Button)`
  border: thin solid ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
  border-radius: 24px;
  color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
  font-size: 12px;
  font-weight: 500;
  height: 28px;
  letter-spacing: 0.01rem;
  margin: 0 8px;
  padding: 0 12px;
`;

class Edit extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    return (
      <Wrapper
        className={'c-bttn__edit'}
        aria-label={this.props['aria-label']} // eslint-disable-line react/prop-types
        onClick={this.onClick}
      >
        {this.props.content}
      </Wrapper>
    );
  }
}

Edit.propTypes = {
  content: PropTypes.any,
  onClick: PropTypes.func,
};

export default Edit;
