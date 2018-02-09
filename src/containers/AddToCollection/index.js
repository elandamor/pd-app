import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Styled-Components
import Wrapper from './styles';

class AddToCollection extends Component {
  render() {
    const { className, onClose } = this.props;

    return (
      <Wrapper
        className={`c-collector${className ? className : ''}`}
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
        <footer>
          <div className="c-comment-wrapper">
            <div className="c-add-comment">
              <div className="c-actions">
                <Button className="c-btn c-btn--toggle">Leave a comment</Button>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

AddToCollection.propTypes = {
  className: PropTypes.string,
};

export default AddToCollection;
