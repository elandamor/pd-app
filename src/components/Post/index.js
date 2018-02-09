/**
 * Post.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      postId,
      postDate,
      postDescription,
      postedBy
    } = {
      postId: Math.round(Math.random() * 1000000),
      postDate: 'about 3 hours ago',
      postDescription: 'Enhanced with cutting-edge technology, #RollsRoycePhantom is the epitome of contemporary luxury.',
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
        <section className="c-post__main">
          <Link
            to={{
              pathname: `/f/post/${postId}`
            }}
          >
            <figure>
              <figcaption className={postDescription.length < 140 ? 'fontSize-18' : ''}>{postDescription}</figcaption>
            </figure>
          </Link>
        </section>
        <footer className="c-post__footer">
          <time
            className="c-date"
            dateTime={postDate}
          >
            {postDate}
          </time>
          <div className="c-actions">
            <Like
              aria-checked={false}
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
