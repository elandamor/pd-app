import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Textarea from '../../components/Textarea';
// Styled-Components
import Wrapper from './styles';

const modalOverlay = document.getElementById('c-modal-overlay');

class GetPost extends Component {
  componentWillMount = () => {
    modalOverlay.className = '-active';
  }

  componentWillUnmount = () => {
    modalOverlay.className = '-inactive';
  }

  render() {
    const { className, history } = this.props;

    return (
      <Wrapper
        className={`c-post-viewer${className ? className : ''}`}
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

GetPost.propTypes = {
  className: PropTypes.string,
};

export default GetPost;
