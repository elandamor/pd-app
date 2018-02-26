import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from './styles';

const DefaultButton = (props) => (
  <button className={props.className} {...props}>
    {props.children}
  </button>
);

const Button = styled(DefaultButton)`
  ${styles}
  height: 48px;
`;

DefaultButton.defaultProps = {
  className: '',
};

DefaultButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
