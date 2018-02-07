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
  &.lazy-image {
    ${'' /* background-color: ${(props) => props.theme.palette.cardBorderColor}; */}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 500rem;
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

const Image = ({ className, src }) => { // eslint-disable-line arrow-body-style
  return (
    <Wrapper
      className={`c-image ${className || ''}`}
      data-src={src}
      src={src}
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
