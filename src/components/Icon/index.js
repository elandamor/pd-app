import React from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

const Icon = (props) => {
  const styles = {
    path: {
      fill: props.fill,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
    },
  };

  return (
    <Wrapper className="icon" aria-hidden="true">
      <svg style={styles.svg} width={`${props.size}`} height={`${props.size}`} viewBox={`${props.viewBox}`}>
        <path style={styles.path} d={props.icon}></path>
      </svg>
    </Wrapper>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  viewBox: '0 0 24 24',
};

export default Icon;
