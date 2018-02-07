/**
 * Product.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

class Product extends Component {
  render() {
    return (
      <Wrapper className="c-product">
        <header className="c-product__header"></header>
        <section className="c-product__main"></section>
        <footer className="c-product__footer"></footer>
      </Wrapper>
    );
  }
}

Product.propTypes = {

};

export default Product;
