/**
 * Post.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import { unique } from 'shorthash';
// Components
import ComposeMessage from '../Button/ComposeMessage';
import Like from '../Button/Like';
import Messager from '../Messager/Loadable';
import Modal from '../Modal/Loadable';
import Image from '../Image';
import User from '../User';
// Styled-Components
import Wrapper from './styles';

hashtag(linkify);
mention(linkify);

class Post extends Component {
  onLinkable = ({ evt, pathname }) => {
    const { history } = this.props;
    const { target } = evt;

    let route = pathname;

    const isHashtag = target.classList.contains('c-hashtag');
    const isMention = target.classList.contains('c-mention');
    const isLinkified = isHashtag || isMention;

    if (isLinkified) {
      route = `${target.pathname}${target.search}`;
    }

    history.push(route);
  }

  render() {
    const {
      postId,
      postDate,
      postDescription,
      postImages,
      postedBy,
    } = {
      postId: unique(Math.round(Math.random() * 1000000).toString()),
      postDate: 'about 3 hours ago',
      postDescription: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
      postImages: [{
        id: Math.round(Math.random() * 1000000),
        url: 'https://scontent-jnb1-1.cdninstagram.com/vp/92ddbcb853231379b3e1e8c3b11581f6/5B15E392/t51.2885-15/s1080x1080/e15/fr/27581837_353608078449033_9197914472906227712_n.jpg',
      }],
      postedBy: {
        id: 1,
        avatar: '',
        name: 'Land Rover',
        username: 'landrover',
      },
    };

    const inFeed = true;

    const hasImages = postImages && postImages.length > 0;

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
          <div
            aria-label={`Open ${postedBy.name}'s post`}
            onClick={(evt) => this.onLinkable({
              evt,
              pathname: inFeed
                ? `/f/post/${postId}`
                : `/@${postedBy.username}/posts/${postId}`,
            })}
            role="presentation"
          >
            <figure>
              {
                hasImages && (
                  <div
                    className="c-image-wrapper"
                  >
                    <Image
                      src={postImages[0].url}
                      width="417"
                      height="229"
                      alt={postDescription}
                    />
                  </div>
                )
              }
              <figcaption>
                <Linkify
                  className={postDescription.length < 140 ? 'fontSize-18' : ''}
                  options={{
                    attributes: {
                      onClick: (evt) => evt.preventDefault(),
                      rel: 'nofollow me noopener noreferrer',
                    },
                    className: {
                      hashtag: 'c-hashtag',
                      url: 'c-url',
                    },
                    formatHref: {
                      hashtag: (val) => `/search?q=${val.substr(1)}&src=hashtag_click`,
                    },
                    nl2br: true,
                  }}
                >
                  {postDescription}
                </Linkify>
              </figcaption>
            </figure>
          </div>
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
              aria-label="Like"
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
  history: PropTypes.object.isRequired,
};

export default Post;
