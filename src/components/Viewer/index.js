import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
import Textarea from '../Textarea';
// Styled-Components
import Wrapper from './styles';

class Viewer extends Component {
  render() {
    const { className, history } = this.props;

    return (
      <Wrapper
        className={`c-viewer${className ? className : ''}`}
      >
        <header>
          <Button
            className="c-btn--close"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section></section>
        <footer>
          <div className="c-comment-wrapper">
            <div className="c-add-comment">
              <Avatar src="" />
              <Textarea
                id="comment-input"
                name="comment-input"
                rows={1}
                maxRows={6}
              />
              <div className="c-actions">
                <Button
                  className="c-btn c-btn--toggle"
                  aria-label="Toggle"
                >
                  Leave a comment
                </Button>
                <Button
                  className="c-btn c-btn--send"
                  aria-label="Send"
                />
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

Viewer.propTypes = {
  className: PropTypes.string,
};

export default Viewer;
