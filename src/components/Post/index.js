/**
 * Post.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Components
import ComposeMessage from '../Button/ComposeMessage';
import Like from '../Button/Like';
import Messager from '../Messager/Loadable';
import Modal from '../Modal/Loadable';
import User from '../User';
// Styled-Components
import Wrapper from './styles';

class Post extends Component {
  render() {
    const {
      postDate,
      postedBy
    } = {
      postDate: 'about 3 hours ago',
      postDescription: 'Often emulated. But never matched. #Phantom is the original.',
      postedBy: {
        id: 1,
        avatar: '',
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycemotorcars',
      }
    };

    return (
      <Wrapper className="c-post">
        <header className="c-post__header">
          <User
            avatar={postedBy.avatar}
            name={postedBy.name}
            username={postedBy.username}
          />
          <Modal
            trigger={(
              <ComposeMessage />
            )}
            unmountOnExit
          >
            <Messager />
          </Modal>
        </header>
        <section className="c-post__main"></section>
        <footer className="c-post__footer">
          <time
            className="c-date"
            dateTime={postDate}
          >
            {postDate}
          </time>
          <div className="c-actions">
            <Like
              aria-checked={true}
              data-count={0}
              data-themed={false}
            />
          </div>
        </footer>
      </Wrapper>
    );
  }
}

Post.propTypes = {

};

export default Post;
