/**
 * Card.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

class Card extends Component {
  render() {
    const { ...props } = this.props;

    return (
      <Wrapper {...props}>
        {this.props.children}
      </Wrapper>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
