import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
// Styled-Components
import Wrapper from './styles';

class PostCreator extends Component {
  render() {
    const { className, onClose } = this.props;

    return (
      <Wrapper
        className={`c-post-creator${className ? className : ''}`}
      >
        <header>
          <Button
            className="c-btn--close"
            aria-label="Close"
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

PostCreator.propTypes = {
  className: PropTypes.string,
};

export default PostCreator;
