import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const styles = {
    default: {
      margin: '0 auto',
      position: 'relative',
    },
    path: {
      fill: props.fill,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
    },
  };

  return (
    <i className="icon" aria-hidden="true" style={styles.default}>
      <svg style={styles.svg} width={`${props.size}`} height={`${props.size}`} viewBox={`${props.viewBox}`}>
        <path style={styles.path} d={props.icon}></path>
      </svg>
    </i>
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
