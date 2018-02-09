import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
// Styled-Components
import Wrapper from './styles';

class Filter extends Component {
  render() {
    const { className, onClose } = this.props;

    return (
      <Wrapper
        className={`c-filter${className ? className : ''}`}
      >
        <header>
          <Button
            className="c-btn--close"
            onClick={onClose}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section></section>
        <footer></footer>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  className: PropTypes.string,
};

export default Filter;
