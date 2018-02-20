/**
 * Message.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {children}
      </Wrapper>
    );
  }
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Message;
