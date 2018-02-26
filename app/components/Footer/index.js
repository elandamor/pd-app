import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

class Footer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { ...props } = this.props;

    return (
      <Wrapper {...props}>
        {this.props.children}
      </Wrapper>
    );
  }
}

Footer.defaultProps = {

};

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
