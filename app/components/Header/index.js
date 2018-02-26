import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { ...props } = this.props;

    return (
      <Wrapper {...props}>
        {this.props.children}
      </Wrapper>
    );
  }
}

Header.defaultProps = {

};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
