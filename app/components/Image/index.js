/**
 * Image
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Wrapper = styled.img`
  background-color: #e8e8e8;
  height: auto;
  width: 100%;

  &.lazy-image {
    ${'' /* background-color: ${(props) => props.theme.palette.cardBorderColor}; */}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    height: 100%;
    visibility: hidden;
    width: 100%;
  }

  &.lazy-image-loaded {
    animation-duration: 3s;
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

const Image = ({ className, src, ...rest }) => { // eslint-disable-line arrow-body-style
  return (
    <Wrapper
      className={`c-image ${className || ''}`}
      data-src={src}
      src={src}
      {...rest}
    />
  );
};

Image.defaultProps = {
  src: '',
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
