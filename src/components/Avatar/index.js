/**
 * Avatar
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
// Components
import Image from '../Image';
// Styles
import Wrapper from './styles';

const Avatar = ({ className, src }) => { // eslint-disable-line arrow-body-style
  return (
    <Wrapper className={`c-avatar ${className || ''}`} >
      <Image
        as="div"
        className="lazy-image"
        src={src}
      />
    </Wrapper>
  );
};

Avatar.defaultProps = {
  src: '',
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Avatar;
